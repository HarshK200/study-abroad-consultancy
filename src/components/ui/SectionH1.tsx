interface SectionH1Props extends React.HTMLProps<HTMLHeadingElement> {
  children?: React.ReactNode;
}

export const SectionH1 = ({ children }: SectionH1Props) => {
  return <h1 className="font-bold text-3xl md:text-4xl mb-5">{children}</h1>;
};
