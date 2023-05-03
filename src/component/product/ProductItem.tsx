import { Col } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// File Import
import StarIcon from "@/assets/images/icons/star.png";
import LinkIcon from "@/assets/images/icons/link.png";
import WishIcon from "@/assets/images/icons/wish.png";
import UnwishIcon from "@/assets/images/icons/wished.png";
import CartIcon from "@/assets/images/icons/add-cart.png";
import CopyIcon from "@/assets/images/icons/copy.png";

const stars = [1, 2, 3, 4, 5];

export const ProductItem = ({ product }: any) => {
  const [showWishlist, setShowWishlist] = useState(false);
  const [isOpenLink, setIsOpenLink] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const wishlistRef: any = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: any) => {
    if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
      setIsOpenLink(false);
    }
  };

  const handleCopyToClipboard = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <Col md={3}>
      <div className="product-item">
        <div className="product-thumb position-relative">
          <Image
            onClick={() => window.open(`/product/${product.id}`, "_self")}
            src={product?.image}
            alt="Profile Icon"
          />
          <div className="add-cart">
            <Image
              onClick={(event) => event.stopPropagation()}
              src={CartIcon}
              alt="Cart Icon"
            />
          </div>
        </div>
        <div className="product-content">
          <h6
            className="title"
            onClick={() => window.open(`/product/${product.id}`, "_self")}
          >
            {product?.title}
          </h6>
          <div className="rating d-flex align-items-center">
            <div className="icon">
              {stars?.map((star, index) => (
                <Image key={index} src={StarIcon} alt="Star" />
              ))}
            </div>
            <div className="value">
              {`${product?.rating?.value} & ${product?.rating?.likes} reviews`}
            </div>
          </div>
          <div className="author-wish-action d-flex justify-content-between align-items-center">
            <div className="author-info d-flex align-items-center">
              <div className="author-thumb">
                <Image src={product?.author?.thumb} alt="Author Icon" />
              </div>
              <div className="author-name">{product?.author?.name}</div>
            </div>
            <div
              className="wish-btn"
              onClick={() => setShowWishlist(!showWishlist)}
            >
              <Image
                src={showWishlist ? UnwishIcon : WishIcon}
                alt="Wish Icon"
              />
            </div>
          </div>

          <div className="price">$ {product?.price}</div>
          <div className="content-value">
            <span></span>
            {product?.content}
          </div>
          <div className="footer-desc position-relative d-flex justify-content-between align-items-center">
            <div className="text">{product?.description}</div>
            <div className="link-copy" ref={wishlistRef}>
              <Image
                src={LinkIcon}
                alt="Link Icon"
                onClick={() => setIsOpenLink(true)}
              />

              {isOpenLink && (
                <div
                  className="copy-action"
                  onClick={() =>
                    handleCopyToClipboard(
                      `http://localhost:3000/product/${product.id}`
                    )
                  }
                >
                  <Image src={CopyIcon} alt="Copy Icon" />
                  Copy Link
                  {isCopied && <div className="copy-text">Text Copied</div>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
