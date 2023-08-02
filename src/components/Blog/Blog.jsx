import React from "react";
import "./Blog.css";
// import Image1 from "../../assets/blog-1.svg";
// import Image2 from "../../assets/blog-2.svg";
// import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section_title">Blogs</h2>

      <div className="blog_container grid">
        <div className="blog_card">
          <div className="blog_thumb">
            {/* <a href="https://medium.com/@vikrant.yadav1401/life-of-an-architecture-student-in-india-425a084bcc39">
              <span className="blog_category">Review</span>
            </a> */}
            <a href="https://medium.com/@vikrant.yadav1401/life-of-an-architecture-student-in-india-425a084bcc39">
              <img
                src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*vQ8KHoT2N-3sc_1tPq4JdQ.jpeg"
                alt=""
                className="blog_img"
              />
            </a>
          </div>
          <div className="blog_details">
            <a href="https://medium.com/@vikrant.yadav1401/life-of-an-architecture-student-in-india-425a084bcc39">
              <h3 className="blog_title">
                Life of an Architecture student in India
              </h3>
            </a>
            <div className="blog_meta">
              <span>30 January, 2023</span>
              <span className="blog_dot">.</span>
              <span>Vikrant Yadav</span>
            </div>
          </div>
        </div>

        <div className="blog_card">
          <div className="blog_thumb">
            {/* <a href="https://medium.com/@vikrant.yadav1401/radha-rani-temple-7434568f68f9">
              <span className="blog_category">Research</span>
            </a> */}
            <a href="https://medium.com/@vikrant.yadav1401/radha-rani-temple-7434568f68f9">
              <img
                src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*5Mpw7L3spznRSJf737n9yg.jpeg"
                alt=""
                className="blog_img"
              />
            </a>
          </div>
          <div className="blog_details">
            <a href="https://medium.com/@vikrant.yadav1401/radha-rani-temple-7434568f68f9">
              <h3 className="blog_title">
                Radha Rani Temple,
                <br /> Barsana
              </h3>
            </a>
            <div className="blog_meta">
              <span>21 April, 2022</span>
              <span className="blog_dot">.</span>
              <span>Vikrant Yadav</span>
            </div>
          </div>
        </div>

        <div className="blog_card">
          <div className="blog_thumb">
            {/* <a href="https://medium.com/@vikrant.yadav1401/kusum-sarovar-e0e67e073264">
              <span className="blog_category">Research</span>
            </a> */}
            <a href="https://medium.com/@vikrant.yadav1401/kusum-sarovar-e0e67e073264">
              <img
                src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*EhhrKIuzabuJrVtNXpSFlA.jpeg"
                alt=""
                className="blog_img"
              />
            </a>
          </div>
          <div className="blog_details">
            <a href="https://medium.com/@vikrant.yadav1401/kusum-sarovar-e0e67e073264">
              <h3 className="blog_title">
                Kusum Sarovar, <br /> Mathura
              </h3>
            </a>
            <div className="blog_meta">
              <span>19 March, 2022</span>
              <span className="blog_dot">.</span>
              <span>Vikrant Yadav</span>
            </div>
          </div>
        </div>

        <div className="blog_card">
          <div className="blog_thumb">
            {/* <a href="https://medium.com/@vikrant.yadav1401/govind-dev-temple-vrindavan-53f12c92e398">
              <span className="blog_category">Research</span>
            </a> */}
            <a href="https://medium.com/@vikrant.yadav1401/govind-dev-temple-vrindavan-53f12c92e398">
              <img
                src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*AvJzcxRTLizM00G6W4wPFQ.jpeg"
                alt=""
                className="blog_img"
              />
            </a>
          </div>
          <div className="blog_details">
            <a href="https://medium.com/@vikrant.yadav1401/govind-dev-temple-vrindavan-53f12c92e398">
              <h3 className="blog_title">
                Govind Dev Temple,
                <br /> Vrindavan
              </h3>
            </a>
            <div className="blog_meta">
              <span>19 February, 2022</span>
              <span className="blog_dot">.</span>
              <span>Vikrant Yadav</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
