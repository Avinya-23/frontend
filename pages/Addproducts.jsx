import React from 'react'
import Layout from '../src/components/Layout'
import './Addproducts.css'

const Addproducts = () => {
  return (
    
    <Layout>
    <div className='heading'>
        Add Products
    </div>
    <div className='formA' >
        <form>
        {/* Image */}
        <p className='H0'>Add Product Name</p>    
        <div className='form0'>
        <input
        type='image'
        className='input0'
        placeholder='Upload an image'
        />    
        </div>    
        {/* Product Name */}
        <p className='H1'>Add Product Name</p>    
        <div className='form1'>
        <input
        type='text'
        className='input1'
        />    
        </div>
        {/* Product details */}
        <p className='H2'>Add Product Description</p>    
        <div>
        <input
        type='text'
        className='input2'
        />    
        </div>
        {/* Product Category */}
        <p className='H3'>Add Product Category</p>    
        <div>
        <input
        type='text'
        className='input3'
        />    
        </div>
        {/* Product Price */}
        <p className='H3'>Add Product Category</p>    
        <div className='price'>
        <input
        type='number'
        className='input4'
        />
        <p className='slash'>/</p> 
        <input
        type='number'
        className='input5'
        />   
        </div>
        <div className='bg-light-blue'>
        <button
        type='submit'
        className='button'
        >
            Submit
        </button>
        </div>
        </form>
    </div>
    </Layout>
    
  );
}

export default Addproducts