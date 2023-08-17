import React from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";


function Home({
  cartItems,
  items,
  searchValue,
  setSearchValue,
  onChangeSearhInput,
  onAddToFavorite,
  onAddToCart,
  isLoading
}) {

  const { isItemAdded } = React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()))
    return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
        <Card
          key={index}
          onClickAdd={onAddToCart}
          onClickFav={onAddToFavorite}
          added={isItemAdded( item && item.id)}
          // cartItems={cartItems}
          loading={isLoading}
          {...item}
        />
      ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="clear"
            />
          )}
          <input
            onChange={onChangeSearhInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
export default Home;

// const onAddToCart = async (obj) => {
//   try {
//     const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
//     if (findItem) {
//       setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
//       await axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${findItem.id}`);
//     } else {
//       setCartItems((prev) => [...prev, obj]);
//       const { data } = await axios.post('https://60d62397943aa60017768e77.mockapi.io/cart', obj);
//       setCartItems((prev) =>
//         prev.map((item) => {
//           if (item.parentId === data.parentId) {
//             return {
//               ...item,
//               id: data.id,
//             };
//           }
//           return item;
//         }),
//       );
//     }
//   } catch (error) {
//     alert('Ошибка при добавлении в корзину');
//     console.error(error);
//   }
// };
