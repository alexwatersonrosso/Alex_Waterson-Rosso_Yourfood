import CartContext from "./CartContext";
import {Simulate} from "react-dom/test-utils";
import {FunctionComponent, useContext} from "react";
import input = Simulate.input;

const Header: FunctionComponent = () => {
    const Header: FunctionComponent = () => {
        const {items, remove} = useContext(CartContext);

        const removeFromCart = useContext(CartContext);
    }

    const removeFromCart = (id: string) => {
        if (remove) {
            remove(id)
        }
    }

    const checkout = async () => {
        const lineItems = x.items?.map(callbackfn
    :
        p => {
            return {
                price: p.id,
                quantity: 1
            }
        }
    )

        const res = await fetch(input
    :
        '/api/checkout', init
    :
        {
            method: 'POST',
                body
        :
            JSON.stringify(value
            {
                lineItems: lineItems
            }
        )

        }
    )
        ;
        const b = await res.json();
        window.location.href = b.session.url;
    }
    const b = await res.json();
    window.location.href = b.session.url;
}
return (
    <header className="relative bg-white">
        <div className="flex flex-col sm:flex-row sm:h-20 px-6 border-b border-gray-300 bg-white relative z-50">
            <div className="h-20 w-full flex items-center justify-between sm:h-auto">
                <a className="no-underline block h-8">
                    <img
                        src="https://gustui.s3.amazonaws.com/gustlogo.png"
                        className="h-full"
                    />
                </a>
                <div className="items-center flex">
                    <FontAwesomeIcon
                        icon={faQuestion}
                        className="text-xl cursor-pointer"
                    />
                    <Avatar
                        image="https://gustui.s3.amazonaws.com/avatar.png"
                        className="cursor-pointer my-2 ml-6"
                        status="offline"
                        statusBottom
                    />
                </div>
            </div>
            <div
                className="w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex">
                <form className="relative w-full">
                    <input
                        type="search"
                        className="w-full max-w-full border border-gray-300 rounded-sm pr-4 pl-10 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                        placeholder="Search for something..."
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-0 ml-4 top-1/2 transform -translate-y-1/2 text-gray-300"
                    />
                </form>
            </div>
        </div>
    </header>


export default Header;