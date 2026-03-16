import React from 'react'
import { useWishList } from '../context/WishlistContext'
import { CiHeart } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { useCartList } from '../context/CartContext';


const Wishlist = () => {
    const { wishlist, toggleWishlist } = useWishList()
    const { togglecartlist } = useCartList()
    const navigate = useNavigate()

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 min-h-[60vh]">
            <p className='text-gray-400 text-sm flex jusftify-start items-center gap-3 cursor-pointer' onClick={() => navigate('/')}><GoArrowLeft /> Back </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">My Wishlist</h1>
            <p className="text-sm text-gray-400 mb-4 tracking-wide">
                {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
            </p>

            {wishlist.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                    <CiHeart className="w-16 h-16 text-gray-300" />
                    <h2 className="text-xl font-semibold text-gray-600">Your wishlist is empty</h2>
                    <p className="text-sm text-gray-400">Browse our products and click the heart icon to save items here.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 bg-[#ae3f4f] hover:bg-black text-white px-6 py-2 text-sm tracking-widest cursor-pointer transition-colors duration-200"
                    >
                        SHOP NOW
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {wishlist.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="bg-[#FBF9F7] h-52 flex items-center justify-center overflow-hidden mb-3 relative">
                                <img
                                    src={product.img || product.image}
                                    alt={product.name}
                                    className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                <button
                                    onClick={() => toggleWishlist(product)}
                                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow text-[#ae3f4f] hover:scale-110 transition-transform duration-200"
                                    title="Remove from wishlist"
                                >
                                    <MdDelete className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-sm font-semibold text-gray-800">{product.name}</p>
                            <p className="text-sm text-gray-500 mt-0.5">{product.price}</p>
                            <button
                                onClick={() => { togglecartlist(product), navigate('/cart') }}
                                className="mt-2 w-full bg-[#ae3f4f] hover:bg-black text-white text-xs py-2 tracking-widest cursor-pointer transition-colors duration-200"
                            >
                                ADD TO CART
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Wishlist
