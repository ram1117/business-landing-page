const Bubbles = () => {
  return (
    <ul className="circles hidden lg:block">
      <li className="h-20 w-20 left-24 bottom-4 animate-vertical"></li>
      <li className="h-12 w-12 left-52 bottom-0 animate-lefttoright"></li>
      <li className="h-14 w-14 right-[20%] bottom-20 animate-vertical"></li>
      <li className="h-8 w-8 left-[35%] bottom-10 animate-vertical"></li>
      <li className="h-20 w-20 right-4 bottom-0 animate-vertical"></li>
    </ul>
  );
};

export default Bubbles;
