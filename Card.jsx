function Card({ title, info}) {
    return (
      <div className="w-[90%] md:w-[400px] h-[250px] bg-white/30 flex-col space-y-5 p-4 pt-12 rounded-md font-['Poppins']">
          <div className="flex space-x-5">
              <span className="material-symbols-outlined text-3xl text-white">neurology</span>
              <span className="text-white font-medium text-2xl">{ title }</span>
          </div>
  
          <div className='text-white pl-10 text-justify pr-5'>{ info }</div>
      </div>
    )
  }
  
  export default Card;