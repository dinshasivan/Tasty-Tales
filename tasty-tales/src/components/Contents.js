import React from 'react'

const Contents = () => {
  return (
    <section className="py-5 bg-light">
    <div className="container">
        <div className="row gy-4">
           
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card">
                    <img src="/pictures/h4-img-1.jpg" alt="Image 1" className="card-img-top"/>

                </div>
                <div>
                    <p>Tasty Croissant and
                        tea for perfect breakfast</p>
                </div>
            </div>

          
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card">
                    <img src="/pictures/h4-img-2.jpg" alt="Image 2" className="card-img-top"/>
                </div>
                <div>
                    <p>Overnight oats with figs and
                        honey recipe</p>
                </div>
            </div>

         
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card">
                    <img src="/pictures/h4-img-3.jpg" alt="Image 3" className="card-img-top"/>
                </div>
                <div>
                    <p>Rustic banana oatmeal and
                        berry pancakes</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card">
                    <img src="/pictures/h4-img-4-1.jpg" alt="Image 4" className="card-img-top"/>
                </div>
                <div>
                    <p>Berries and banana smoothie
                        for a snack</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contents