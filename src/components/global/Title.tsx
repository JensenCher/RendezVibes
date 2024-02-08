interface TitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  size?: "default" | "sm" | "lg";
}

const Title = ({ title, subtitle, center = false, size = "default" }: TitleProps) => {
  return (
    <div className={`mb-4 md:flex md:items-center ${center ? "md:justify-center" : "md:justify-start"}`}>
      <div className={`max-w-2xl px-4 lg:max-w-4xl lg:px-0 ${center ? "text-center" : ""}`}>
        {title ? <h1 className={`text-3xl font-bold text-primary ${size == "lg" ? "sm:text-5xl" : "sm:text-3xl"}`}>{title}</h1> : null}
        {subtitle ? <p className={`mt-2 text-sm text-muted-foreground ${size == "lg" ? "sm:text-lg" : "sm:text-md"}`}>{subtitle}</p> : null}
      </div>
    </div>
  );
};

export default Title;
