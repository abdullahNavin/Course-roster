import { useState } from "react";
import Blogs from "./Blogs";
import { useEffect } from "react";
import Cart from "./Cart";

const Home = () => {

    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])

    // function
    const [AllSelect, setAllSelect] = useState([])

    const [count, setCount] = useState(0)

    const [remaing, setRemaing] = useState(20)

    const handelSelect = (blog) => {

        if (remaing < blog.credit) {
            alert("You don't have sufficient credit")
        }
        else {
            const newSelect = [...AllSelect, blog]
            setAllSelect(newSelect)

            const totall = newSelect.reduce((acumulate, item) => acumulate + item.credit, 0)
            setCount(totall)

            const newRemaing = remaing - blog.credit;
            setRemaing(newRemaing)
        }

    }

    return (
        <div className="container mx-auto">

            <div className="my-10">
                <h1 className="text-5xl font-bold justify-center items-center flex">Course Registration</h1>
            </div>

            <div className="flex gap-2">

                <div className="w-2/3">
                    <Blogs handelSelect={handelSelect} allBlogs={allBlogs}></Blogs>
                </div>

                <div className="w-1/3">
                    <Cart
                        count={count}
                        AllSelect={AllSelect}
                        remaing={remaing}
                    ></Cart>
                </div>

            </div>
        </div>
    );
};

export default Home;