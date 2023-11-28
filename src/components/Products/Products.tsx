import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import { add, changeCount } from '../../store/productsSlice';

export const Products: FC = () => {
  const products = useAppSelector(state => state.products.products);
  const dispath = useAppDispatch();

  function addText() {
    const text = prompt('Введите название')
    if (text) {
      return text
    } else {
      return 'Вы не ввели название!'
    }
  }

  return (
    <div>
      <button onClick={() => {dispath(add({name: addText()}))}}>Добавить</button>
      {products.map(e => (
        <div key={e.id}>
          {e.title} - {e.count} шт. <button onClick={() => dispath(changeCount({id: e.id, count: 1}))}>+</button>
          <button onClick={() => dispath(changeCount({id: e.id, count: -1}))}>-</button>
        </div>
      ))}
    </div>
  );
};
