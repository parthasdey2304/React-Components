import React from 'react';

const Blogs1
 = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // replace with actual image URL
      title: 'Boost your conversion rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
      date: 'Mar 16, 2020',
      category: 'Marketing',
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        avatar: 'https://images.unsplash.com/photo-1630686999279-351f34354b0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D', // replace with actual avatar
      },
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1684356818924-7141a5503266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // replace with actual image URL
      title: 'How to use search engine optimization to drive sales',
      description:
        'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: 'Mar 10, 2020',
      category: 'Sales',
      author: {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', // replace with actual avatar
      },
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1723914142569-4eab32fe384a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // replace with actual image URL
      title: 'Improve your customer experience',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisc rem et corporis.',
      date: 'Feb 12, 2020',
      category: 'Business',
      author: {
        name: 'Tom Cook',
        role: 'Director of Product',
        avatar: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww', // replace with actual avatar
      },
    },
  ];


  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl text-indigo-600 font-bold tracking-wide uppercase">From the blog</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Learn how to grow your business with our expert advice
          </p>
        </div>

        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 hover:duration-500">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={blog.image} alt={blog.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-lg font-medium text-indigo-600">
                    {blog.category}
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
                    <p className="mt-3 text-base text-gray-500">{blog.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                    <img className="scale-110" src={blog.author.avatar} alt={blog.author.name} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
                      <span className='text-sm text-gray-500'>{blog.author.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs1
;
