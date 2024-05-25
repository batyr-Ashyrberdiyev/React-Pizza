export const SortModal = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <img width={10} height={10} src="/assets/arrow.svg" alt="" />
        <div>
          Сортировка по:{' '}
          <span className="text-orange cursor-pointer border-dashed border-b-[1px] border-orange">
            популярности
          </span>
        </div>
      </div>
    </div>
  );
};
