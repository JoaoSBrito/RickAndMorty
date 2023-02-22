import { BsLinkedin, BsGithub } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="h-auto w-screen bg-zinc-700 text-white px-8 py-2">
      <div
        className="flex flex-col gap-4 flex-wrap w-full items-center justify-between px-[8%] text-center
      xl:mx-auto xl:max-w-7xl"
      >
        <p>
          &copy; Copyright {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/joao-vitor-brito/"
            target={"_blank"}
            className="text-[#1ABED6] font-semibold"
          >
            João Vitor Brito
          </a>
        </p>

        <div className="social-medias flex gap-14">
          <a href="https://github.com/JoaoSBrito" target={"_blank"}>
            <BsGithub
              size={32}
              className="hover:text-cyan-500 hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/joao-vitor-brito/"
            target={"_blank"}
          >
            <BsLinkedin
              size={32}
              className="hover:text-cyan-500 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
