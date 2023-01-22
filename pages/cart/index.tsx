import type {NextPage} from "next"
import React, {useState} from "react";
import {MainLayout} from "../../components/Layout";
import {RowCard} from "../../components/RowCard";
import {useRouter} from "next/router";
import {CartModel, CartModelSchema} from "../../models/Cart";
import {Model, ModelSchema} from "../../models/ProductSchema";
import {set, z} from "zod"

const EmptyCart: React.FC<{ action: Function }> = ({action}) => {
    return (
        <div className="py-32 flex flex-col items-center justify-center">
            <h2 className="text-2xl pt-8 font-bold">В корзине пусто</h2>
            <h2 className="text-medium pt-4 font-medium pb-4 text-center">
                Добавьте товары к заказу на главной странице
            </h2>
            <button type="button"
                    onClick={() => action()}
                    className="text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-4 mb-2 mx-2">
                На главную
            </button>
        </div>
    )
}

const Cart: React.FC<{ items: Model[], onRemove: Function, onPlus: Function, onMinus: Function }> =
    ({items, onRemove, onPlus, onMinus}) => {
        const [total, setTotal] = useState<number>(items.map(v => v.amount * v.product.price).reduce((a, v) => a + v, 0))

        function updateTotal() {
            setTotal(items.map(v => v.amount * v.product.price).reduce((a, v) => a + v, 0))
        }

        return (
            <div>
                {
                    items.map((m, index) => (
                        <div key="$v" className="py-3">
                            <RowCard label={m.product.label} price={String(m.product.price)} imageUrl=""
                                     size={m.size} color={m.color} amount={m.amount}
                                     onRemove={() => {
                                         onRemove(index);
                                         updateTotal()
                                     }}
                                     onPlus={() => {
                                         onPlus(index);
                                         updateTotal()
                                     }}
                                     onMinus={() => {
                                         onMinus(index);
                                         updateTotal()
                                     }}
                            ></RowCard>
                        </div>
                    ))
                }


                <h2 className="text-2xl mb-4 pt-8 font-bold">Адрес доставки</h2>

                <h2 className="text-2xl pt-8 font-bold">Оплата</h2>

                <div className="flex justify-between self-stretch">
                    <h2 className="pt-8 font-semibold">Стоимость товаров</h2>
                    <h2 className="pt-8 font-semibold">{total} p</h2>
                </div>

                <div className="flex justify-between self-stretch">
                    <h2 className="pt-8 pb-8 font-semibold">Доставка</h2>
                    <h2 className="pt-8 pb-8 font-semibold">490 p</h2>
                </div>

                <div className="flex justify-between self-stretch">
                    <h2 className="text-2xl pb-4 font-bold">Итого</h2>
                    <h2 className="text-3xl pb-4 font-bold items-end">{
                        total + 490
                    } р.</h2>
                </div>

                <div className="relative pb-8">
                    <input type="search" id="default-search"
                           className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                           placeholder="Промокод" required>
                    </input>
                </div>

                <button type="button"
                        className="w-full mb-8 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Оплатить
                </button>
            </div>
        )
    }


const Home: NextPage = () => {

    const router = useRouter()

    const [cartModel, setCartModel] = useState<CartModel>(cart())
    const [count, setCount] = useState<number>(cartModel.items.length)

    function cart(): CartModel {
        const emptyCart = JSON.stringify({items: []})

        if (typeof window == 'undefined') {
            return CartModelSchema.parse(JSON.parse(emptyCart))
        }

        return CartModelSchema.parse(JSON.parse(window.localStorage.getItem("cart") ?? emptyCart))
    }

    function onRemove(id: number) {
        cartModel.items.splice(id, 1)
        setCartModel(cartModel)
        setCount(cartModel.items.length)
        window.localStorage.setItem("cart", JSON.stringify(cartModel))
    }

    function onPlus(id: number) {
        cartModel.items[id].amount += 1
        setCartModel(cartModel)
        setCount(cartModel.items.length)
        window.localStorage.setItem("cart", JSON.stringify(cartModel))
    }

    function onMinus(id: number) {
        if (cartModel.items[id].amount <= 1) {
            onRemove(id)
            return
        }

        cartModel.items[id].amount -= 1
        setCartModel(cartModel)
        setCount(cartModel.items.length)
        window.localStorage.setItem("cart", JSON.stringify(cartModel))
    }

    return (
        <MainLayout>
            <h1 className="w-full text-3xl mb-4 pt-8 font-bold">Корзина</h1>

            {count > 0 ?
                <Cart items={cartModel.items} onRemove={onRemove} onPlus={onPlus} onMinus={onMinus}/> :
                <EmptyCart action={() => router.push("/")}/>}
        </MainLayout>
    )
}

export default Home