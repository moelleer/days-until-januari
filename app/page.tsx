function countDays(): number {
  const currentDate = new Date();
  const targetDate = new Date("2025-01-31");
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft;
}

export async function generateMetadata() {
  const daysLeft = countDays();
  const title = `${daysLeft} dagar kvar till 31 januari`;
  const ogImageUrl = `/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    openGraph: {
      title,
      images: [ogImageUrl],
    },
  };
}

export default function Home() {
  const daysLeft = countDays();
  const title = `dagar kvar till 31 januari`;

  return (
    <div className="h-screen grid place-items-center font-mono font-black bg-[#0017ee]">
      <div className="flex flex-col text-center text-white">
        <span className="text-9xl">{daysLeft}</span>
        <span>{title}</span>
        <span className="mt-16">
          <span className="text-9xl block">
            <span className="text-green-400">8</span>/10
          </span>
          <span>tillfälligt engagemang</span>
        </span>
      </div>
    </div>
  );
}
