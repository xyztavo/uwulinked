import config from "@/config";

export default function Footer() {
    return (
      <h2 className="my-10 dark:text-primary text-center">{config.footer}</h2>
    )
}