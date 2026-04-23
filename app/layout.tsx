import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY environment variable is required' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { programa, publicoAlvo, tom, objetivo } = body as {
      programa: string;
      publicoAlvo: string;
      tom: string;
      objetivo: string;
    };

    // Validate inputs
    if (!programa?.trim() || !publicoAlvo?.trim() || !tom?.trim() || !objetivo?.trim()) {
      return NextResponse.json(
        { error: 'All fields (programa, publicoAlvo, tom, objetivo) are required and must be non-empty strings' },
        { status: 400 }
      );
    }

    const prompt = `Você é um copywriter especialista em marketing de afiliados. Crie conteúdo promocional para o programa \"${programa}\", direcionado ao público-alvo \"${publicoAlvo}\", no tom \"${tom}\", com o objetivo \"${objetivo}\".

Responda APENAS com um objeto JSON válido no seguinte formato exato:
{
  \"roteiro\": \"Texto completo do roteiro promocional (máximo 200 palavras)\",
  \"descricao\": \"Descrição curta e atrativa (máximo 150 caracteres)\",
  \"hashtags\": [\"#hashtag1\", \"#hashtag2\", \"#hashtag3\"]
}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 19000);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    const generated = JSON.parse(content) as {
      roteiro: string;
      descricao: string;
      hashtags: string[];
    };

    const affiliateLink = `https://example.com/afiliado/${encodeURIComponent(programa)}?ref=ai-generated&utm_source=${encodeURIComponent(publicoAlvo)}&utm_medium=${encodeURIComponent(tom)}&utm_campaign=${encodeURIComponent(objetivo)}`;

    return NextResponse.json({
      success: true,
      data: {
        roteiro: generated.roteiro,
        descricao: generated.descricao,
        hashtags: generated.hashtags,
        affiliateLink,
      },
    });
  } catch (error: any) {
    if (error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout (20s limit exceeded)' },
        { status: 408 }
      );
    }
    if (error.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Try again later.' },
        { status: 429 }
      );
    }
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
