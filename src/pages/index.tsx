import Head from "next/head";
import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

// File Import
import { Header, Footer, Pagination } from "@/component/common";
import { ProductItem } from "@/component/product";
import { contents, sortOptions, products } from "@/constant";

export default function Home() {
  const [items, setItems]: any = useState(products || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [filterItems, setFilterItems]: any = useState([]);

  // Get current item
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems =
    filterItems?.length === 0
      ? items?.slice(indexOfFirstPost, indexOfLastPost)
      : filterItems?.slice(indexOfFirstPost, indexOfLastPost);

  // Handle sort from main page
  const handleSort = (value: string) => {
    if (value === "price_asc") {
      setCurrentPage(1);
      setItems(
        [...items]?.sort(
          (a: { price: number }, b: { price: number }) => a.price - b.price
        )
      );
    }

    if (value === "price_desc") {
      setCurrentPage(1);
      setItems(
        [...items]?.sort(
          (a: { price: number }, b: { price: number }) => b.price - a.price
        )
      );
    }

    if (value === "id_asc") {
      setCurrentPage(1);
      setItems(
        [...items]?.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
      );
    }

    if (value === "id_desc") {
      setCurrentPage(1);
      setItems(
        [...items]?.sort((a: { id: number }, b: { id: number }) => b.id - a.id)
      );
    }

    if (value === "All Items") {
      setCurrentPage(1);
      setItems(products);
    }
  };

  // Handle Search from header top
  const handleSearch = (searchText: any) => {
    if (searchText === "") {
      setCurrentPage(1);
      setItems([...products]);
    } else {
      const updateItems = [...items]?.filter(({ title, author, content }) => {
        return (
          author?.name?.toLowerCase().includes(searchText?.toLowerCase()) ||
          title?.toLowerCase().includes(searchText?.toLowerCase()) ||
          content?.toLowerCase().includes(searchText?.toLowerCase())
        );
      });

      setCurrentPage(1);
      setItems(updateItems);
    }
  };

  // Handle filter from left side
  const handleFilter = (checked: any, element: any) => {
    setCurrentPage(1);

    if (checked) {
      const copyItems = [...items];

      const filterArr = copyItems?.filter(({ content }) =>
        content?.toLowerCase().includes(element?.toLowerCase())
      );

      setFilterItems((prevItems: any) => [...prevItems, ...filterArr]);
    } else {
      const copyItems = [...filterItems];

      const filterArr = copyItems?.filter(
        ({ content }) =>
          !content?.toLowerCase().includes(element?.toLowerCase())
      );

      setFilterItems(filterArr);
    }
  };

  // Paginate function
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Head>
        <title>Avatown App</title>
        <meta name="description" content="Generated by Avatown App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Area  */}
      <Header handleSearch={(value: string | number) => handleSearch(value)} />

      {/* Main Area */}
      <section className="main-content">
        <Row>
          <Col md={2}>
            <aside className="sidbar-left px-3 py-4">
              {/* Contents Widget */}
              <div className="widget-item">
                <h6 className="widget-title">Filter By Contents</h6>
                <ul className="widget-wrapper">
                  {contents?.map((content, index) => (
                    <li key={index} className="widget-list">
                      <Form.Check
                        type="checkbox"
                        onChange={(event) =>
                          handleFilter(event.target.checked, content?.value)
                        }
                        id={`category-${content?.id}}`}
                        label={content?.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Col>
          <Col md={10}>
            <main className="homepage-view">
              {/* Main Heading */}
              <div className="main-heading p-3 mb-2 d-flex justify-content-between align-items-center">
                <h4 className="items-label">All items</h4>
                <div className="sort-wrapper">
                  <Form.Select
                    aria-label="Sort Options"
                    onChange={(event) => handleSort(event.target.value)}
                  >
                    <option>All Items</option>
                    {sortOptions?.map((option, index) => (
                      <option key={index} value={option?.value}>
                        {option?.name}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </div>

              {/* Item content */}
              <div className="product-item-wrapper px-3">
                <Row>
                  {currentItems?.map((product: any, index: number) => (
                    <ProductItem key={index} product={product} />
                  ))}
                </Row>
              </div>
            </main>
          </Col>
        </Row>

        {/* Pagination area */}
        <div className="pagination-bar d-flex justify-content-center align-items-center mb-3">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={
              filterItems?.length ? filterItems?.length : items?.length
            }
            paginate={paginate}
          />
        </div>
      </section>

      {/* Footer Area */}
      <Footer />
    </>
  );
}
