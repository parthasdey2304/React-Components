import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1601656269222-fda862e6dc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwc2V0dXB8ZW58MHx8MHx8fDA%3D',
      title: 'Boost your conversion rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
      date: 'Mar 16, 2020',
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        avatar:
          'https://images.unsplash.com/photo-1630686999279-351f34354b0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D%3D',
      },
    },
    {
      id: 2,
      image:
        'https://plus.unsplash.com/premium_photo-1684356818924-7141a5503266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to use search engine optimization to drive sales',
      description:
        'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: 'Mar 10, 2020',
      author: {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        avatar:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    },
    {
      id: 3,
      image:
        'https://plus.unsplash.com/premium_photo-1723914142569-4eab32fe384a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Improve your customer experience',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisc rem et corporis.',
      date: 'Feb 12, 2020',
      author: {
        name: 'Tom Cook',
        role: 'Director of Product',
        avatar:
          'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww',
      },
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase">
            From the blog
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Learn how to grow your business with our expert advice
          </p>
        </div>

        <div className="grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none text-white">
          {blogs.map((blog) => (
            <div key={blog.id} className={`bg-[url('${blog.image}')] flex flex-col justify-end rounded-lg overflow-hidden shadow-sm h-[60vh] bg-cover bg-center	bg-no-repeat shadow-inner shadow-black`}>
              <div className="relative">
                <div className="px-6 text-white flex items-center gap-2 font-semibold">
                  <p className="text-sm">{blog.date}</p>
                  <p>.</p>
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full mr-2"
                      src={blog.author.avatar}
                      alt={blog.author.name}
                    />
                    <p className="text-sm">{blog.author.name}</p>
                  </div>
                </div>
              </div>
              <div className="bg-transparent p-6 pt-0 text-white bg-gradient-to-t from-black to-transparent mb-[-90px] hover:mb-0 hover:duration-200">
                <a href="#" className="block">
                  <p className="text-xl font-semibold">
                    {blog.title}
                  </p>
                  <p className="mt-3 text-base">
                    {blog.description}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
