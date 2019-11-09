// import React, {Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { getUsers, updateUserThunks, createUser, getProducts, createCartThunks } from './redux/store';

// class _Admin extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     user: {},
//     product: {},
//     name: '',
//     email: ''
//   };
//   this.onChange = this.onChange.bind(this);
//   this.updateUser = this.updateUser.bind(this);
// }
// onChange(ev) {
//   this.setState({ [ev.target.name] : ev.target.value });
// }
// async updateUser(ev) {
//   ev.preventDefault();
//   const payload = {name: this.state.name, email: this.state.email}
//   await this.props.updateUser(this.state.user.id, payload);
//   // this.props.history.push('/users');
// }
// async componentDidMount() {
//   await this.props.getProducts();
//   await this.props.getUsers();
// }
// render() {
//    const { updateUser, onChange } = this;
//   const { product, user } = this.state;
//   return (
//     <div>
//       <div id='flex'>
//         {
//           this.props.products.map( product => {
//             return (
//               <div key={product.id} id='flex'>
//                 <li key='img'><img src ={product.imageURL}></img></li>
//                 <input>{product.name}</input>
//                 <form>
//                   <select>
//                     <option>Rap</option>
//                     <option>Rock</option>
//                     <option>RnB</option>
//                     <option>Rap</option>
//                     <option>Rap</option>
//                     <option>Metal</option>
//                   </select>
//                   <input key='genre'>{product.genre}</input>
//                   <input key='price'>{product.price}</input>
//                 </form>
//               </div>
//             );
//           })
//       //     <form>
//       //       {user.name}<input name='name' value={this.state.name} onChange = { onChange } /> <br/>
//       //       {user.email}<input name='email' value={this.state.email} onChange = { onChange } />
//       //       <button onClick = { updateUser } >Edit</button>
//       //     </form>
//       //   }
//       //   </div>
//       // <div id='flex'>
//       //   {
//         }
//         </div>
//     </div>
//    )
//  };
// };

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     products: state.products
//   }
// }

// const mapDispatchToProps = {
//   getUsers: getUsers,
//   createUser: createUser,
//   updateUser: updateUserThunks,
//   getProducts: getProducts,
//   createCart: createCartThunks
// }

// const Admin = connect(mapStateToProps, mapDispatchToProps)(_Admin);

// export default Admin
