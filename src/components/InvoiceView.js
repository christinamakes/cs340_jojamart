import React from 'react';
// import { AiOutlineEdit } from "react-icons/ai";
// import { Link } from 'react-router-dom'

function InvoiceView({ salesDetail, sale}) {
    const [members, setMembers] = useState([]);
    // const [employees, setEmployees] = useState([]);
    // const [products, setProducts] = useState([]);
    // const [sales, setSales] = useState([]);

    // get members from /members
    const loadMembers = async () => {
        const response = await fetch(`${URL}/members`);
        const members = await response.json();
        setMembers(members);
    };

    // // get employees from /employees
    // const loadEmployees = async () => {
    //     const response = await fetch(`${URL}/employees`);
    //     const employees = await response.json();
    //     setEmployees(employees);
    // };

    // // Get products from /products
    // const loadProducts = async () => {
    //     const response = await fetch(`${URL}/products`);
    //     const products = await response.json();
    //     setProducts(products);
    // };

    // // Get sales from /sales
    // const loadSales = async () => {
    //     const response = await fetch(`${URL}/sales`);
    //     const sales = await response.json();
    //     setSales(sales);
    // };

    const findMember = (sale) => {
        let targetMember;
        for (const member in members) {
            if (member.member_id === sale.member_id) {
                targetMember = member;
            }
        }

        return (
            {targetMember}
        )
    };

    useEffect(() => {
        loadMembers();
        // loadEmployees();
        // loadProducts();
        // loadSales();
    }, []);

    return (
        <tr>
            <td>{sale.order_number}</td>
            <td>{sale.member_id + ' -- ' + findMember().member_name}</td>
            <td>{sale.employee_id}</td>
            <td>{salesDetail.product_id}</td>
            <td>{salesDetail.product_price}</td>
            <td>{salesDetail.quantity}</td>
            <td>{sale.invoice_total}</td>
            <td>{salesDetail.order_type}</td>
            <td>{sale.purchase_date}</td>
        </tr>
    );
}

export default InvoiceView;