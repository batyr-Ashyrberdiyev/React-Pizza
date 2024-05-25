import clsx from 'clsx';
import { useCategory } from '../lib/zustand/useCategory';

interface IProps {
  view: string;
  id: string;
  active?: boolean;
}

const Category = ({ active, ...props }: IProps) => {
  const setCategory = useCategory((state) => state.setCategory);

  const { view, id } = props;

  return (
    <div
      onClick={() => setCategory(props)}
      className={clsx(
        'py-4 px-6 font-bold transition-all cursor-pointer text-[16px] rounded-full',
        {
          'bg-textBlack text-white': active,
          'bg-[#F9F9F9] text-black': !active,
        },
      )}>
      {view}
    </div>
  );
};

export default Category;
