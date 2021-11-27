import React, { Component } from 'react';
import Rainbow from './Hoc/Rainbow';
import axios from 'axios';
import {Link} from 'react-router-dom';
import resim from '../images/resim.png'
import {connect} from 'react-redux';

class Home extends Component {

        componentDidMount() {
        axios.get('http://192.168.1.40:5001/Vacation/GetVacationDayList')
            .then(
                res => {
                    console.log(res);
                    this.setState({
                        posts: res.data.slice(0, 10)  // 0 dan 10. index datayı getirir
                    });
                }
            ).catch(res => {console.log(res)})
    }
    render() {
        const { posts } = this.props;
        // const postList = post.length ? (
        //     post.map(po => {
        //         return (
        //             <div className="card" key={po.id}>
        //                 <div className="card-content">
        //                     <span className="card-title">
        //                             {po.title}
        //                     </span>
        //                     <p>
        //                         {po.body}
        //                     </p>
        //                 </div>
        //             </div>
        //         )
        //     })
        // ) : (
        //     <div className="center">
        //         No post Show
        //     </div>

        // )                    
        return (
            <div>
                <div className="container">
                    <h4 className="center">Anasayfa</h4>
                    {
                        posts.map(po =>
                            <div className="card" key={po.id}>
                               {/* <img src={resim} /> */}
                                <div className="card-content">
                                    <Link to ={'/post/'+po.id}>
                                    <span className="card-title">
                                        {po.title}
                                    </span>
                                    </Link>
                                    <p>
                                        {po.body}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
   return {
    posts:state.posts
   }
}
export default connect(mapStateToProps)(Home);
// export default Rainbow(Home);





            // Eski Hali

// class Home extends Component {
//     state = ({
//         posts: []
//     })

//     componentDidMount() {
//         axios.get('http://jsonplaceholder.typicode.com/posts')
//             .then(
//                 res => {
//                     console.log(res);
//                     this.setState({
//                         posts: res.data.slice(0, 10)  // 0 dan 10. index datayı getirir
//                     });
//                 }
//             )
//     }

//     render() {
//         const post = this.state.posts;
//         // const postList = post.length ? (
//         //     post.map(po => {
//         //         return (
//         //             <div className="card" key={po.id}>
//         //                 <div className="card-content">
//         //                     <span className="card-title">
//         //                             {po.title}
//         //                     </span>
//         //                     <p>
//         //                         {po.body}
//         //                     </p>
//         //                 </div>
//         //             </div>
//         //         )
//         //     })
//         // ) : (
//         //     <div className="center">
//         //         No post Show
//         //     </div>

//         // )                    
//         return (
            
//             <div>
//                 <div className="container">
//                     <h4 className="center">Homsssee</h4>
//                     {
//                         post.map(po =>
//                             <div className="card" key={po.id}>
//                                {/* <img src={resim} /> */}
//                                 <div className="card-content">
//                                     <Link to ={'/post/'+po.id}>
//                                     <span className="card-title">
//                                         {po.title}
//                                     </span>
//                                     </Link>
//                                     <p>
//                                         {po.body}
//                                     </p>
//                                 </div>
//                             </div>
//                         )
//                     }
//                 </div>
//             </div>
//         )
//     }
// }
// export default Rainbow(Home);