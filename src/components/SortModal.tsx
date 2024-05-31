import clsx from "clsx";
import { useSort } from "../lib/zustand/useSort";
import { useEffect, useRef } from "react";
import { v4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

export const sortMenu = [
  {
    view: "популярность",
    id: "popularity",
  },
  {
    view: "цена",
    id: "price",
  },
  {
    view: "алфавит",
    id: "alphabet",
  },
];

export const SortModal = () => {
  const active = useSort((state) => state.active);
  const setActive = useSort((state) => state.setActive);
  const activeSort = useSort((state) => state.activeSort);
  const setActiveSort = useSort((state) => state.setActiveSort);

  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  console.log(active);

  return (
    <div className="">
      <div
        onClick={() => setActive(!active)}
        className="flex cursor-pointer items-center gap-2"
      >
        <img
          width={10}
          height={10}
          src="/assets/arrow.svg"
          alt="arrow"
          className={clsx("transition-all", {
            "rotate-[180deg]": active,
          })}
        />
        <div className="text-[18px]">
          Сортировка по:
          <span className="text-orange w-[100px] border-dashed font-bold border-b-[1px] border-orange">
            {" " + activeSort.view}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // ref={sortRef}
            className="bg-white absolute z-10 rounded-lg shadow-lg"
          >
            {sortMenu.map((item) => (
              <div
                key={v4()}
                onClick={() => {
                  setActive(false);
                  setActiveSort(item);
                }}
                className={clsx(
                  "cursor-pointer transition-all font-semibold text-[18px] py-5 px-5",
                  {
                    "text-orange bg-orange/10": activeSort.id === item.id,
                    "hover:text-orange hover:bg-orange/5": item.id === item.id,
                  }
                )}
              >
                {item.view}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
