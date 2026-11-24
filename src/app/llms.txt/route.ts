export function GET() {
  const body = `# Surajit Maity (nextpointer)

## About
Surajit Maity is a full-stack developer who builds cool, thoughtful digital products and loves crafting clean, delightful designs. He enjoys turning ideas into polished web experiences using modern technologies like Next.js, React, and TypeScript.

## Pages
- Home: https://nextpointer.dev/
- Blog: https://nextpointer.dev/blog
- Playground: https://nextpointer.dev/playground
- LLMs: https://nextpointer.dev/llms.txt

## Work
- Expense Op - Expense management tool: https://expense.nextpointer.dev
- Piplup - AI integrated quiz app: https://piplup-quiz.vercel.app/ (source: https://github.com/nextpointer/piplup)
- N0T3S - A beautiful notes app: https://notes.nextpointer.dev (source: https://github.com/nextpointer/n0t3s)
- Timer - A minimalist timer app: https://next-timer.netlify.app/ (source: https://github.com/nextpointer/next-timer)
- Dock - Animated dock playground: https://dock.nextpointer.dev

## Playground
- Color Wars - Multiplayer chain-reaction game: https://color-wars.nextpointer.dev
- Wordle - Multiplayer wordle game: https://wordle.nextpointer.dev
- Morphhy - Animated gradient blob generator: https://blob.nextpointer.dev

## Profiles
- GitHub: https://github.com/nextpointer
- X: https://x.com/nextpointer_
- LinkedIn: https://www.linkedin.com/in/nextpointer/

## Contact
- Email: hello@nextpointer.dev
- Portfolio: https://nextpointer.dev
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
