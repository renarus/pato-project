import React, { useState } from 'react'
import { MealsData } from '../../datas/MealsData'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { IoMdCloseCircleOutline } from "react-icons/io";
import cartActions from '../../redux/cartActions';
import { useDispatch, useSelector } from 'react-redux';
const Meals = () => {
    const [breakfast, setBreakfast] = useState(true)
    const [dinner, setDinner] = useState(false)
    const [supper, setSupper] = useState(false)
    const [drink, setDrink] = useState()
    const [details, setDetails] = useState(false)
    const cartItems = useSelector(state => state.reducer.cart)




    const seeBreakfastMenu = () => {
        setBreakfast(true)
        setDinner(false)
        setSupper(false)
        setDrink(false)
        setDetails(false)

    }

    const setDinnerMenu = () => {
        setDinner(true)
        setBreakfast(false)
        setSupper(false)
        setDrink(false)
    }
    const setSupperMenu = () => {
        setSupper(true)
        setDinner(false)
        setBreakfast(false)
        setDrink(false)
    }
    const setDrinksMenu = () => {
        setDrink(true)
        setSupper(false)
        setDinner(false)
        setBreakfast(false)
    }

    const closeDetails = () => {
        setDetails(false)
    }

    const { id } = useParams()
    const breakke = MealsData.breakfast.find(prod => prod.id == id)
    const fastie = MealsData.fastfood.find(prod => prod.id == id)
    const supperie = MealsData.supper.find(prod => prod.id == id)
    const drinkie = MealsData.drinks.find(prod => prod.id == id)


    const dispatch = useDispatch()
    return (
        <section className='meals-section-1'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <button onClick={() => seeBreakfastMenu()}>Breakfast</button>
                    </div>
                    <div className="col-3">
                        <button onClick={() => setDinnerMenu()}>Dinner</button>
                    </div>
                    <div className="col-3">
                        <button onClick={() => { setSupperMenu() }}>Supper</button>
                    </div>
                    <div className="col-3">
                        <button onClick={() => { setDrinksMenu() }}>Drinks</button>
                    </div>
                </div>
                <div className="row breakfast-div">
                    {
                        breakfast ?
                            MealsData.breakfast.map((meals, index) => {


                                return (
                                    <div className='col-4 meals'>
                                        <Link to={`/meals/${meals.id}`}><img src={meals.img} alt="" /></Link>
                                        <h6>${meals.price}</h6>
                                        <p>{meals.desc}</p>
                                        <button className='add-to-cart-btn' onClick={() => dispatch(cartActions.add_To_Cart(meals))}>Add to cart</button>
                                    </div>
                                )
                            }
                            )
                            : null

                    }

                    {details && breakke ? <div className='each-meal'><img src={breakke.img} alt="" />
                        <IoMdCloseCircleOutline onClick={() => closeDetails()} />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam labore, aliquid debitis autem eos officia illo dignissimos reiciendis voluptatum tempore consequuntur, esse eveniet deleniti? Amet iste recusandae aut ea voluptas?</p>
                        <h6>{breakke.price}</h6>
                        <button>Add to cart</button>
                    </div> : null

                    }




                </div>
                <div className="row dinner-div">
                    {
                        dinner ?
                            MealsData.fastfood.map((meals, index) => {
                                return (
                                    <div className='col-4 meals'>
                                        <Link to={`/meals/${meals.id}`}><img src={meals.img} alt="" /></Link>
                                        <h6>{meals.price}</h6>
                                        <p>{meals.desc}</p>
                                        <button className='add-to-cart-btn' onClick={() => dispatch(cartActions.add_To_Cart(meals))}>Add to cart</button>
                                    </div>
                                )
                            })
                            : null}
                    {
                        fastie ? <div className='each-meal'><img src={fastie.img} alt="" />
                            <IoMdCloseCircleOutline />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam labore, aliquid debitis autem eos officia illo dignissimos reiciendis voluptatum tempore consequuntur, esse eveniet deleniti? Amet iste recusandae aut ea voluptas?</p>
                            <h6>{fastie.price}</h6>
                            <button>Add to cart</button>
                        </div> : null
                    }


                </div>
                <div className="row supper-div">
                    {
                        supper ?
                            MealsData.supper.map((meals, index) => {
                                return (
                                    <div className='col-4 meals'>
                                        <Link to={`/meals/${meals.id}`}><img src={meals.img} alt="" /></Link>
                                        <h6>{meals.price}</h6>
                                        <p>{meals.desc}</p>
                                        <button className='add-to-cart-btn' onClick={() => dispatch(cartActions.add_To_Cart(meals))}>Add to cart</button>
                                    </div>
                                )
                            })
                            : null}
                    {
                        supperie ? <div className='each-meal'><img src={supperie.img} alt="" />
                            <IoMdCloseCircleOutline />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam labore, aliquid debitis autem eos officia illo dignissimos reiciendis voluptatum tempore consequuntur, esse eveniet deleniti? Amet iste recusandae aut ea voluptas?</p>
                            <h6>{supperie.price}</h6>
                            <button>Add to cart</button>
                        </div> : null
                    }
                </div>

                <div className="row drink-div">
                    {
                        drink ?
                            MealsData.drinks.map((meals, index) => {
                                return (
                                    <div className='col-4 meals'>
                                        <Link to={`/meals/${meals.id}`}><img src={meals.img} alt="" /></Link>
                                        <h6>{meals.price}</h6>
                                        <p>{meals.desc}</p>
                                        <button className='add-to-cart-btn' onClick={() => dispatch(cartActions.add_To_Cart(meals))}>Add to cart</button>
                                    </div>
                                )
                            })
                            : null}
                    {
                        drinkie ? <div className='each-meal'><img src={drinkie.img} alt="" />
                            <IoMdCloseCircleOutline />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam labore, aliquid debitis autem eos officia illo dignissimos reiciendis voluptatum tempore consequuntur, esse eveniet deleniti? Amet iste recusandae aut ea voluptas?</p>
                            <h6>{drinkie.price}</h6>
                            <button>Add to cart</button>
                        </div> : null
                    }
                </div>
            </div>
        </section>
    )
}

export default Meals
