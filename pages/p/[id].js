import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.employee.firstName} - {props.employee.lastName}</h1>
    <p>{props.employee.email}</p>
    {/* <img src={props.employee.image.medium} /> */}
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swaplify.com/api/employees/${id}`);
  const employee = await res.json();

  console.log(`Fetched employee: ${employee.name}`);

  return { employee };
};

export default Post;