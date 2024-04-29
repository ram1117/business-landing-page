interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  return (
    <div
      className={`my-4 lg:my-8 bg-divider h-2 w-[120px] lg:w-[170px] ${className}`}
    >
      &nbsp;
    </div>
  );
};

export default SectionDivider;
