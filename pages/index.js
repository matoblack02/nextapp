import Link from 'next/link';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Index = props =>
{
  console.log(props.data)

  return (
    <Layout>
      <h1>Employees</h1>
      <ul>
        {props.data.map(employee => (
          <li key={employee.id}>
            <Link href="/p/[id]" as={`/p/${employee.id}`}>
              <a>{employee.firstName}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

Index.getInitialProps = async function() {
  const res = await fetch('https://swaplify.com/api/employees');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data:data
  };
};

export default Index;

