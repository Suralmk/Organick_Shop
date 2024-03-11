import React from 'react'
import './blogdetail.css'
import { man1 } from '../../assets/images'
const BlogDetail = () => {
  return (
    <div className='blogdetail-container'>
      <div className='blogdetail-heading'>
        <img src={man1} alt='' />
        <div className='blogdetail-header'>
          <div className='date-auth'>
            <p className='text'>
              {' '}
              <span>Posted on</span> February 6 2024
            </p>
            <p>By Surafel Melaku</p>
          </div>
          <h1>Research More organic Food</h1>
          <p
            className='text'
            style={{
              width: 630
            }}
          >
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed
          </p>
        </div>
      </div>
      <div className='blogdetail-wrapper'>
        <p className='text'>
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technolog
        </p>
        <div className='blogdetail-section'>
          <h2>Preferred Form of Vitamin D?</h2>
          <p className='text'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English
          </p>
          <ul>
            <li className='text'>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li className='text'>
              Content here, content here', making it look like readable{' '}
            </li>
            <li className='text'>
              Packages and web pageLorem Ipsum as their default
            </li>
          </ul>
        </div>
        <p className='quote'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          nostrum, recusandae soluta aliquam nihil deserunt id cum corrupti nisi
          vero perspiciatis maiores minus quaerat at dolorem nam. Beatae,
          reprehenderit doloremque.
        </p>
        <div className='blogdetail-section'>
          <h2>Preferred Form of Vitamin D?</h2>
          <p className='text'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English
          </p>
          <ul>
            <li className='text'>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li className='text'>
              Content here, content here', making it look like readable{' '}
            </li>
            <li className='text'>
              Packages and web pageLorem Ipsum as their default
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
