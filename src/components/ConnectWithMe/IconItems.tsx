import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import IconItem from "./IconItem";

type IconItemsProps = {
    style: "CONTACT" | "MAIN";
};

function IconItems({ style }: IconItemsProps) {
    return (
        <div
            className={
                style === "CONTACT"
                    ? "flex items-center justify-between py-4"
                    : "m-auto flex max-w-[330px] items-center justify-between py-4"
            }
        >
            <IconItem
                url={"https://www.linkedin.com/in/katsumi-ishihara-99371b15a/"}
                newTab={true}
                ariaLabel="Visit LinkedIn profile"
            >
                <FaLinkedinIn />
            </IconItem>
            <IconItem
                url={"https://github.com/katsumi8"}
                newTab={true}
                ariaLabel="Visit GitHub profile"
            >
                <FaGithub />
            </IconItem>
            <IconItem
                url={"mailto:katsumi.ishihara08@gmail.com"}
                newTab={true}
                ariaLabel="Send an email"
            >
                <AiOutlineMail />
            </IconItem>
            <IconItem
                url="/contact"
                newTab={false}
                ariaLabel="Go to contact section"
            >
                {/* <Link href="/#contact"> */}
                <BsFillPersonLinesFill />
            </IconItem>
        </div>
    );
}

export default IconItems;
