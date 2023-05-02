import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-neutral-200 flex flex-col items-center justify-center p-4">
      <Form />
      <div className="mt-4">
        <span className="text-xs md:text-sm text-neutral-700 font-normal text-center">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-700 underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://twitter.com/Sani_M_Alhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 text-neutral-50 rounded-md p-[2px]"
          >
            Keezy🚀✨💫
          </a>
          .
        </span>
      </div>
    </div>
  );
}
