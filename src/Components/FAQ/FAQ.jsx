import React from 'react';
import Question from './Question/Question';
import Questions from '../../Data/FAQ/FAQ.js';
const FAQ = () => {
    return (
        <section className='w-full mb-28'>
             <div className='max-w-screen-xl px-5 grid grid-cols-12 gap-x-6 mx-auto'>
                <div className='col-span-12 lg:col-span-6'>
                    <img src={require('../../Assets/imgs/faq.webp')} alt="" className='w-full'/>
                </div>
                <div className='pt-8 px-6 lg:col-span-6 col-span-12'>
                    <div className='space-y-6'>
                        <div>
                            <span className='text-sky-600 uppercase block font-semibold'>support</span>
                            <h1 className='font-semibold text-4xl'>Frequently asked questions</h1>
                        </div>
                        <ul className='pr-3 space-y-4 pt-4'>
                            {Questions.map((quest, id) => (
                                <Question {...quest} key={id}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;