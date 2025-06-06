import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  OverlayTrigger,
  Popover,
  PopoverBody,
  Row,
} from 'react-bootstrap'
import BlogCard from './BlogCard'
import { Fragment } from 'react/jsx-runtime'
import avatar4 from '@/assets/images/avatar/04.jpg'
import { BsInfoCircle } from 'react-icons/bs'
import Link from 'next/link'
import pattern from '@/assets/images/elements/pattern.svg'
import Image from 'next/image'
import { blogs } from '../data'

const Blogs = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="d-lg-flex justify-content-between align-items-center">
          <h4 className="mb-3 mb-lg-0">Our Blog</h4>
          <Nav defaultActiveKey={'0'} className="nav-pills gap-1 nav-pills-light">
            <NavItem>
              <NavLink eventKey={'0'}>All blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'1'}>Marketing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'2'}>Design</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'3'}>Lifestyle</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'4'}>Technology</NavLink>
            </NavItem>
          </Nav>
        </div>
        <Row className="g-4 g-sm-5 g-xl-7 mt-0">
          {blogs.map((blog, idx) => (
            <Fragment key={idx}>
              <Col md={6} lg={4} key={idx}>
                <BlogCard blog={blog} />
              </Col>
              {idx === 1 && (
                <Col md={6} lg={4}>
                  <Card as={'article'} className="bg-dark p-4 overflow-hidden h-100" data-bs-theme="dark">
                    <figure className="position-absolute end-0 bottom-0 mb-n5 me-n7">
                      <svg width="277.7px" height="258.7px" viewBox="0 0 277.7 258.7" xmlSpace="preserve">
                        <path className="fill-light" d="M86.9,168.9l-60,60l2.3,2.3l60-60C88.4,170.4,87.6,169.6,86.9,168.9z" />
                        <path className="fill-light" d="M83.6,165.1l-56.7,47.6l2.1,2.5l56.7-47.6C84.9,166.7,84.2,165.9,83.6,165.1z" />
                        <path className="fill-light" d="M98.6,178.4l-27.8,48.1l2.8,1.6l27.8-48.1C100.4,179.5,99.5,179,98.6,178.4z" />
                        <path className="fill-light" d="M117.3,185.8l-7.3,41.2l3.2,0.6l7.3-41.2C119.4,186.2,118.3,186,117.3,185.8z" />
                        <path className="fill-light" d="M112.4,184.6l-10.7,39.9l3.1,0.8l10.7-39.9C114.5,185.2,113.4,184.9,112.4,184.6z" />
                        <path className="fill-light" d="M103,180.9l-20,42.9l2.9,1.4l20-42.8C104.9,181.8,104,181.3,103,180.9z" />
                        <path className="fill-light" d="M107.6,182.9l-14.7,40.4l3,1.1l14.7-40.4C109.6,183.7,108.6,183.3,107.6,182.9z" />
                        <path className="fill-light" d="M94.4,175.6l-41.7,59.5l2.6,1.8L97,177.4C96.2,176.8,95.3,176.2,94.4,175.6z" />
                        <path className="fill-light" d="M90.5,172.4l-57.9,69.1l2.5,2.1l58-69.1C92.1,173.8,91.3,173.1,90.5,172.4z" />
                        <path className="fill-light" d="M80.6,161L30,196.4l1.8,2.6l50.6-35.4C81.8,162.7,81.2,161.9,80.6,161z" />
                        <path className="fill-light" d="M71.4,122.4l-35.3-3.1l-0.3,3.2l35.3,3.1C71.2,124.6,71.3,123.5,71.4,122.4z" />
                        <path className="fill-light" d="M71.1,132.5l-29.5,2.6l0.3,3.2l29.5-2.6C71.3,134.7,71.2,133.6,71.1,132.5z" />
                        <path className="fill-light" d="M71,127.5H40v3.2H71c0-0.5,0-1.1,0-1.6C71,128.5,71,128,71,127.5z" />
                        <path className="fill-light" d="M71.6,137.5L42,142.8l0.6,3.2l29.7-5.2C72,139.7,71.8,138.6,71.6,137.5z" />
                        <path className="fill-light" d="M78,156.6l-44.1,25.4l1.6,2.8l44.1-25.4C79,158.5,78.5,157.6,78,156.6z" />
                        <path className="fill-light" d="M75.8,152.1L37.3,170l1.4,2.9l38.5-18C76.7,154,76.2,153.1,75.8,152.1z" />
                        <path className="fill-light" d="M72.6,142.5l-31.3,8.4l0.8,3.1l31.3-8.4C73.1,144.6,72.8,143.6,72.6,142.5z" />
                        <path className="fill-light" d="M74,147.4l-34.2,12.5l1.1,3l34.2-12.5C74.7,149.4,74.3,148.4,74,147.4z" />
                        <path className="fill-light" d="M175.4,163.6l21.4,15l1.8-2.6l-21.4-15C176.7,161.9,176.1,162.7,175.4,163.6z" />
                        <path className="fill-light" d="M180.7,155l29.9,13.9l1.4-2.9l-29.9-13.9C181.7,153.1,181.2,154,180.7,155z" />
                        <path className="fill-light" d="M178.3,159.4l23.6,13.6l1.6-2.8l-23.5-13.6C179.4,157.6,178.8,158.5,178.3,159.4z" />
                        <path className="fill-light" d="M172.3,167.5l23.7,19.9l2.1-2.5l-23.7-19.9C173.7,165.9,173,166.7,172.3,167.5z" />
                        <path className="fill-light" d="M72.2,117.4l-45.2-8l-0.6,3.2l45.2,8C71.8,119.5,72,118.5,72.2,117.4z" />
                        <path className="fill-light" d="M122.3,186.6l-3.9,44.9l3.2,0.3l3.9-44.9C124.4,186.8,123.3,186.7,122.3,186.6z" />
                        <path className="fill-light" d="M182.8,150.4l40.1,14.6l1.1-3l-40.1-14.6C183.6,148.4,183.2,149.4,182.8,150.4z" />
                        <path className="fill-light" d="M184.5,145.6l54.5,14.6l0.8-3.1l-54.5-14.6C185,143.6,184.8,144.6,184.5,145.6z" />
                        <path className="fill-light" d="M186.5,135.7l80.5,7l0.3-3.2l-80.5-7C186.7,133.6,186.6,134.7,186.5,135.7z" />
                        <path className="fill-light" d="M185.7,140.7l69.1,12.2l0.6-3.2l-69.1-12.2C186.1,138.6,185.9,139.7,185.7,140.7z" />
                        <path className="fill-light" d="M168.7,171.1l30.2,30.2l2.3-2.3L171,168.9C170.3,169.6,169.5,170.4,168.7,171.1z" />
                        <path className="fill-light" d="M127.3,187v52.4h3.2V187c-0.5,0-1.1,0-1.6,0C128.4,187,127.9,187,127.3,187z" />
                        <path className="fill-light" d="M132.4,186.9l5.7,65.3l3.2-0.3l-5.7-65.3C134.5,186.7,133.5,186.8,132.4,186.9z" />
                        <path className="fill-light" d="M142.4,185.4l18.1,67.4l3.1-0.8l-18.1-67.4C144.5,184.9,143.4,185.2,142.4,185.4z" />
                        <path className="fill-light" d="M137.4,186.4l12.7,72.3l3.2-0.6l-12.7-72.3C139.5,186,138.5,186.2,137.4,186.4z" />
                        <path className="fill-light" d="M164.9,174.5l30.5,36.3l2.5-2.1l-30.5-36.3C166.6,173.1,165.8,173.8,164.9,174.5z" />
                        <path className="fill-light" d="M160.8,177.4l24.7,35.3l2.6-1.8l-24.7-35.3C162.6,176.2,161.7,176.8,160.8,177.4z" />
                        <path className="fill-light" d="M156.5,180l21.9,37.9l2.8-1.6l-21.9-37.9C158.4,179,157.4,179.5,156.5,180z" />
                        <path className="fill-light" d="M147.2,184l21.3,58.5l3-1.1l-21.3-58.5C149.3,183.3,148.3,183.7,147.2,184z" />
                        <path className="fill-light" d="M152,182.2l22,47.2l2.9-1.4l-22-47.2C153.9,181.3,152.9,181.8,152,182.2z" />
                        <path className="fill-light" d="M171,89.3l36.1-36.1l-2.3-2.3L168.7,87C169.5,87.7,170.3,88.5,171,89.3z" />
                        <path className="fill-light" d="M174.3,93.1L211,62.3l-2.1-2.5l-36.7,30.8C173,91.4,173.7,92.2,174.3,93.1z" />
                        <path className="fill-light" d="M177.3,97.2l36.3-25.4l-1.8-2.6l-36.3,25.4C176.1,95.4,176.7,96.3,177.3,97.2z" />
                        <path className="fill-light" d="M179.9,101.5l37-21.4l-1.6-2.8l-37,21.4C178.8,99.6,179.4,100.6,179.9,101.5z" />
                        <path className="fill-light" d="M182.1,106.1l41.1-19.2l-1.4-2.9l-41.1,19.2C181.2,104.1,181.7,105.1,182.1,106.1z" />
                        <path className="fill-light" d="M183.9,110.8l52.5-19.1l-1.1-3l-52.5,19.1C183.2,108.7,183.6,109.8,183.9,110.8z" />
                        <path className="fill-light" d="M163.5,82.6l28.3-40.4l-2.6-1.8l-28.3,40.4C161.7,81.3,162.6,81.9,163.5,82.6z" />
                        <path className="fill-light" d="M167.4,85.8L200.8,46l-2.5-2.1l-33.4,39.8C165.8,84.4,166.6,85,167.4,85.8z" />
                        <path className="fill-light" d="M159.3,79.7l19.6-33.9l-2.8-1.6l-19.6,33.9C157.4,78.6,158.4,79.2,159.3,79.7z" />
                        <path className="fill-light" d="M186.9,129.1c0,0.5,0,1.1,0,1.6H275v-3.2h-88.1C186.8,128,186.9,128.5,186.9,129.1z" />
                        <path className="fill-light" d="M186.8,125.6l90.9-8l-0.3-3.2l-90.9,8C186.6,123.5,186.7,124.6,186.8,125.6z" />
                        <path className="fill-light" d="M185.3,115.6l77.6-20.8l-0.8-3.1l-77.6,20.8C184.8,113.6,185,114.6,185.3,115.6z" />
                        <path className="fill-light" d="M186.2,120.6l89.9-15.9l-0.6-3.2l-89.9,15.9C185.9,118.5,186.1,119.5,186.2,120.6z" />
                        <polygon className="fill-light" points="39.1,24.5 90.5,85.8 90.5,85.7 	" />
                        <path className="fill-light" d="M93,83.7L41.5,22.4l-2.5,2.1l51.4,61.3C91.3,85,92.1,84.3,93,83.7z" />
                        <path className="fill-light" d="M89.1,87l-53-53l-2.3,2.3l53,53C87.6,88.5,88.4,87.7,89.1,87z" />
                        <path className="fill-light" d="M97,80.7L47.4,9.8l-2.6,1.8l49.7,70.9C95.3,81.9,96.1,81.3,97,80.7z" />
                        <path className="fill-light" d="M101.4,78.1L57,1.2l-2.8,1.6l44.4,76.9C99.5,79.2,100.4,78.6,101.4,78.1z" />
                        <path className="fill-light" d="M85.6,90.6L32.8,46.3l-2.1,2.5l52.9,44.4C84.2,92.2,84.9,91.4,85.6,90.6z" />
                        <path className="fill-light" d="M77.1,103.1L4.1,69.1L2.7,72l73.1,34.1C76.2,105.1,76.7,104.1,77.1,103.1z" />
                        <polygon className="fill-light" points="82.4,94.5 27.2,55.9 82.4,94.5 	" />
                        <path className="fill-light" d="M82.4,94.5L27.2,55.9l-1.8,2.6l55.2,38.7C81.2,96.3,81.8,95.4,82.4,94.5z" />
                        <path className="fill-light" d="M79.6,98.7L14.1,60.9l-1.6,2.8L78,101.5C78.5,100.6,79,99.6,79.6,98.7z" />
                        <path className="fill-light" d="M73.4,112.5L8.2,95.1l-0.8,3.1l65.2,17.5C72.8,114.6,73.1,113.6,73.4,112.5z" />
                        <path className="fill-light" d="M75.1,107.8l-74-26.9l-1.1,3l74,26.9C74.3,109.8,74.7,108.7,75.1,107.8z" />
                        <path className="fill-light" d="M140.6,72.3l3.2-18l-3.2-0.6l-3.2,18C138.5,71.9,139.5,72.1,140.6,72.3z" />
                        <path className="fill-light" d="M135.6,71.5l1.7-19.7l-3.2-0.3l-1.7,19.7C133.5,71.3,134.5,71.4,135.6,71.5z" />
                        <path className="fill-light" d="M154.9,77.3l11.8-25.2l-2.9-1.4L152,75.9C152.9,76.3,153.9,76.8,154.9,77.3z" />
                        <path className="fill-light" d="M145.5,73.5l4.9-18.3l-3.1-0.8l-4.9,18.4C143.4,73,144.5,73.2,145.5,73.5z" />
                        <path className="fill-light" d="M150.3,75.2l7.5-20.7l-3-1.1l-7.5,20.7C148.3,74.4,149.3,74.8,150.3,75.2z" />
                        <path className="fill-light" d="M130.6,71.2l0-24h-3.2v24c0.5,0,1.1,0,1.6,0C129.5,71.1,130,71.2,130.6,71.2z" />
                        <path className="fill-light" d="M115.5,72.7l-14.2-53l-3.1,0.8l14.2,53C113.4,73.2,114.5,73,115.5,72.7z" />
                        <path className="fill-light" d="M105.9,75.9L70.5,0l-2.9,1.4L103,77.3C104,76.8,104.9,76.3,105.9,75.9z" />
                        <path className="fill-light" d="M110.6,74.1l-24.7-68l-3,1.1l24.7,68C108.6,74.8,109.6,74.4,110.6,74.1z" />
                        <path className="fill-light" d="M125.5,71.2l-2.7-30.9l-3.2,0.3l2.7,30.9C123.4,71.4,124.4,71.3,125.5,71.2z" />
                        <path className="fill-light" d="M120.5,71.8l-7-39.6l-3.2,0.6l7,39.6C118.3,72.1,119.4,71.9,120.5,71.8z" />
                        <path className="fill-light" d="M182.2,151.8l35.3,14.6l0.5-1.1l-35.3-14.6C182.5,151,182.3,151.4,182.2,151.8z" />
                        <path className="fill-light" d="M186.2,137.2l18.3,2.4l0.2-1.2l-18.3-2.4C186.3,136.4,186.3,136.8,186.2,137.2z" />
                        <path className="fill-light" d="M185.6,117.1l9.1-2l-0.3-1.2l-9,2C185.4,116.3,185.5,116.7,185.6,117.1z" />
                        <path className="fill-light" d="M180,156.4l27.4,14.3l0.5-1.1l-27.4-14.3C180.3,155.6,180.2,156,180,156.4z" />
                        <path className="fill-light" d="M186.4,122.1l8.8-1.1l-0.2-1.2l-8.8,1.2C186.3,121.3,186.3,121.7,186.4,122.1z" />
                        <path className="fill-light" d="M186.7,132.2l12.9,0.6l0-1.2l-12.9-0.6C186.8,131.4,186.8,131.8,186.7,132.2z" />
                        <path className="fill-light" d="M186.8,127.1l10-0.4l-0.1-1.2l-10,0.4C186.8,126.3,186.8,126.8,186.8,127.1z" />
                        <path className="fill-light" d="M185.3,142.2l29.3,6.5l0.2-1.2l-29.3-6.5C185.5,141.4,185.4,141.8,185.3,142.2z" />
                        <path className="fill-light" d="M183.9,147.1l39.9,12.6l0.4-1.1l-39.8-12.6C184.2,146.3,184.1,146.7,183.9,147.1z" />
                        <path className="fill-light" d="M177.4,160.7l19.1,12.2l0.6-1L178,159.7C177.8,160,177.6,160.4,177.4,160.7z" />
                        <path className="fill-light" d="M145.7,184.5l1.5,4.7l1.2-0.4l-1.5-4.7C146.5,184.2,146.1,184.4,145.7,184.5z" />
                        <path className="fill-light" d="M155.1,180.7l0.5,0.9l1.1-0.6l-0.5-0.9C155.8,180.3,155.4,180.5,155.1,180.7z" />
                        <path className="fill-light" d="M150.5,182.8l0.8,1.9l1.1-0.5l-0.8-1.9C151.2,182.5,150.8,182.7,150.5,182.8z" />
                        <path className="fill-light" d="M159.5,178.2l0.7,1.1l1-0.7l-0.7-1.1C160.2,177.8,159.8,178,159.5,178.2z" />
                        <path className="fill-light" d="M174.5,164.8l12.2,9.3l0.7-1l-12.2-9.3C175,164.2,174.7,164.5,174.5,164.8z" />
                        <path className="fill-light" d="M171.2,168.6l7.1,6.5l0.8-0.9l-7.1-6.5C171.7,168.1,171.4,168.4,171.2,168.6z" />
                        <path className="fill-light" d="M163.7,175.4l1.7,2.3l1-0.7l-1.7-2.3C164.3,174.9,164,175.2,163.7,175.4z" />
                        <path className="fill-light" d="M167.6,172.2l3.8,4.1l0.9-0.8l-3.8-4.1C168.2,171.7,167.9,171.9,167.6,172.2z" />
                        <path className="fill-light" d="M132,71.2l0.1-3.2l-1.2-0.1l-0.1,3.3C131.2,71.2,131.6,71.2,132,71.2z" />
                        <path className="fill-light" d="M146.9,74l0.6-1.8l-1.1-0.4l-0.6,1.8C146.1,73.8,146.5,73.9,146.9,74z" />
                        <path className="fill-light" d="M140.8,185.7l2.6,11.7l1.2-0.3l-2.6-11.7C141.6,185.6,141.2,185.7,140.8,185.7z" />
                        <path className="fill-light" d="M184.3,112.2l10.9-3.4l-0.4-1.2l-10.9,3.4C184.1,111.5,184.2,111.8,184.3,112.2z" />
                        <path className="fill-light" d="M127,71.2l-0.4-9.8l-1.2,0l0.4,9.8C126.2,71.2,126.6,71.2,127,71.2z" />
                        <path className="fill-light" d="M121.9,71.6l-2.5-18.9l-1.2,0.2l2.5,18.9C121.1,71.7,121.5,71.6,121.9,71.6z" />
                        <path className="fill-light" d="M112,73.6l-10.7-33.9l-1.1,0.4L110.9,74C111.3,73.9,111.7,73.8,112,73.6z" />
                        <path className="fill-light" d="M116.9,72.4l-6.1-27.7l-1.2,0.3l6.1,27.7C116.1,72.6,116.5,72.5,116.9,72.4z" />
                        <path className="fill-light" d="M151.6,75.8l3.8-9.1l-1.1-0.5l-3.8,9.1C150.9,75.5,151.2,75.6,151.6,75.8z" />
                        <path className="fill-light" d="M182.6,107.5l15.1-6.3l-0.5-1.1l-15.1,6.3C182.3,106.7,182.5,107.1,182.6,107.5z" />
                        <path className="fill-light" d="M180.5,102.9l22.4-11.6l-0.6-1.1L180,101.8C180.2,102.1,180.3,102.5,180.5,102.9z" />
                        <path className="fill-light" d="M175.2,94.3l22.3-17.1l-0.8-1l-22.3,17.1C174.7,93.6,175,94,175.2,94.3z" />
                        <path className="fill-light" d="M178.1,98.5l25.7-16.4l-0.6-1l-25.7,16.4C177.6,97.8,177.8,98.1,178.1,98.5z" />
                        <path className="fill-light" d="M156.2,78l6-11.5l-1.1-0.6l-6,11.6C155.4,77.6,155.8,77.8,156.2,78z" />
                        <path className="fill-light" d="M160.5,80.5l5.4-8.5l-1-0.6l-5.4,8.5C159.8,80.1,160.2,80.3,160.5,80.5z" />
                        <path className="fill-light" d="M164.6,83.5l6.4-8.4l-1-0.7l-6.4,8.4C164,83,164.3,83.2,164.6,83.5z" />
                        <path className="fill-light" d="M172,90.4l17-15.5l-0.8-0.9l-17,15.5C171.5,89.8,171.7,90.1,172,90.4z" />
                        <path className="fill-light" d="M168.5,86.8l10.9-11.9l-0.9-0.8l-10.9,11.9C167.9,86.2,168.2,86.5,168.5,86.8z" />
                        <path className="fill-light" d="M61.3,100.5l-0.5,1.1l14.3,5.9c0.1-0.4,0.3-0.7,0.5-1.1L61.3,100.5z" />
                        <path className="fill-light" d="M77.8,101.8L66,95.6l-0.6,1.1l11.8,6.2C77.4,102.5,77.6,102.1,77.8,101.8z" />
                        <path className="fill-light" d="M80.3,97.4l-9.2-5.8l-0.6,1l9.2,5.9C79.9,98.1,80.1,97.8,80.3,97.4z" />
                        <path className="fill-light" d="M83.3,93.3l-7.8-6l-0.7,1l7.8,6C82.8,94,83.1,93.6,83.3,93.3z" />
                        <path className="fill-light" d="M86.6,89.5L78,81.7l-0.8,0.9l8.5,7.8C86,90.1,86.3,89.8,86.6,89.5z" />
                        <path className="fill-light" d="M90.2,86L77.6,72.2L76.7,73l12.6,13.8C89.6,86.5,89.9,86.2,90.2,86z" />
                        <path className="fill-light" d="M72.5,116l-13.9-3.1l-0.3,1.2l13.9,3.1C72.3,116.7,72.4,116.3,72.5,116z" />
                        <path className="fill-light" d="M73.8,111.1l-15.3-4.8l-0.4,1.2l15.3,4.8C73.6,111.8,73.7,111.5,73.8,111.1z" />
                        <path className="fill-light" d="M71.5,120.9l-7.4-1l-0.2,1.2l7.4,1C71.4,121.7,71.5,121.3,71.5,120.9z" />
                        <path className="fill-light" d="M107.3,75.3L91.8,38l-1.1,0.4l15.5,37.3C106.5,75.6,106.9,75.5,107.3,75.3z" />
                        <path className="fill-light" d="M102.7,77.4L83,39.7l-1.1,0.6L101.6,78C102,77.8,102.3,77.6,102.7,77.4z" />
                        <path className="fill-light" d="M94.1,82.7L72.7,54.9l-1,0.7l21.4,27.9C93.5,83.2,93.8,83,94.1,82.7z" />
                        <path className="fill-light" d="M98.3,79.9L75.4,44l-1,0.7l22.9,35.9C97.6,80.3,97.9,80.1,98.3,79.9z" />
                        <path className="fill-light" d="M101.6,180.2l-16.1,31l1.1,0.6l16.1-31C102.3,180.5,102,180.3,101.6,180.2z" />
                        <path className="fill-light" d="M106.2,182.3l-12.1,29.1l1.1,0.5l12.1-29.1C106.9,182.6,106.5,182.5,106.2,182.3z" />
                        <path className="fill-light" d="M97.2,177.6l-21.2,33.2l1,0.6l21.2-33.2C97.9,178,97.6,177.8,97.2,177.6z" />
                        <path className="fill-light" d="M93.1,174.7l-24.9,32.4l1,0.7l24.9-32.5C93.8,175.1,93.5,174.9,93.1,174.7z" />
                        <path className="fill-light" d="M110.9,184.1l-8.3,26.3l1.2,0.4l8.3-26.3C111.7,184.4,111.3,184.2,110.9,184.1z" />
                        <path className="fill-light" d="M125.7,186.9l-1.5,35.3l1.2,0.1L127,187C126.6,186.9,126.1,186.9,125.7,186.9z" />
                        <path className="fill-light" d="M115.8,185.5l-5.7,25.9l1.2,0.3l5.7-25.8C116.5,185.7,116.1,185.6,115.8,185.5z" />
                        <path className="fill-light" d="M120.7,186.4l-4.2,31.7l1.2,0.2l4.2-31.8C121.5,186.5,121.1,186.5,120.7,186.4z" />
                        <path className="fill-light" d="M135.8,186.6l3.5,26.3l1.2-0.2l-3.5-26.3C136.6,186.5,136.2,186.5,135.8,186.6z" />
                        <path className="fill-light" d="M130.8,187l1.5,34.1l1.2-0.1l-1.5-34C131.6,186.9,131.2,187,130.8,187z" />
                        <path className="fill-light" d="M82.6,163.9l-14.3,11l0.7,1l14.3-11C83,164.5,82.8,164.2,82.6,163.9z" />
                        <path className="fill-light" d="M89.3,171.4L64,199l0.9,0.8l25.3-27.6C89.9,171.9,89.6,171.6,89.3,171.4z" />
                        <path className="fill-light" d="M85.8,167.8l-22,20.1l0.8,0.9l22-20.1C86.3,168.4,86,168,85.8,167.8z" />
                        <path className="fill-light" d="M77.2,155.3l-1.7,0.9l0.6,1.1l1.7-0.9C77.6,156,77.4,155.6,77.2,155.3z" />
                        <path className="fill-light" d="M79.7,159.7l-6.9,4.4l0.6,1l6.9-4.4C80.1,160.4,79.9,160,79.7,159.7z" />
                      </svg>
                    </figure>
                    <CardBody className="p-0">
                      <div className="d-flex justify-content-between mb-5">
                        <h6 className="mb-0 fw-light">ABD-05</h6>
                        <div className="badge bg-primary text-white small">Podcast</div>
                      </div>
                      <CardTitle>
                        <Link href="">Collaborating to drive innovation in the Tech industry</Link>
                      </CardTitle>
                    </CardBody>
                    <CardFooter className="bg-transparent p-0 d-flex justify-content-between mt-8">
                      <div>
                        <small>Artist</small>
                        <h6>Frances Guerrero</h6>
                      </div>
                      <div className="avatar flex-shrink-0">
                        <Image className="avatar-img rounded-circle" src={avatar4} alt="avatar" />
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              )}
              {idx === 4 && (
                <Col md={6} lg={4}>
                  <Card as={'article'} className="bg-primary p-4 overflow-hidden h-100">
                    <div className="position-absolute end-0 bottom-0 mb-n5 me-n7">
                      <Image alt="" src={pattern} className="opacity-4" />
                    </div>
                    <CardBody className="z-index-1 p-0">
                      <div className="d-flex justify-content-between mb-5">
                        <div className="badge bg-dark text-white small">Advertisements</div>
                        <OverlayTrigger
                          trigger="click"
                          placement="top"
                          overlay={
                            <Popover>
                              <PopoverBody>You&apos;re seeing this ad because your activity meets the intended audience of our site.</PopoverBody>
                            </Popover>
                          }>
                          <Link href="" className="mb-0 text-white small" tabIndex={0}>
                            <BsInfoCircle size={18} className="ps-1" /> Sponsored
                          </Link>
                        </OverlayTrigger>
                      </div>
                      <CardTitle>Always wanted to become a coder? Here is a great chance for you to fulfill your dream.</CardTitle>
                    </CardBody>
                    <CardFooter className="bg-transparent d-flex justify-content-between align-items-center p-0 mt-8 z-index-1">
                      <div className="d-flex align-items-center">
                        <div className="avatar flex-shrink-0 me-2">
                          <div className="avatar-img rounded-circle bg-dark">
                            <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold small">WP</span>
                          </div>
                        </div>
                        <span className="heading-color fw-semibold">Web poster</span>
                      </div>
                      <Link href="" className="btn btn-sm btn-white mb-0">
                        Apply now
                      </Link>
                    </CardFooter>
                  </Card>
                </Col>
              )}
            </Fragment>
          ))}
        </Row>
        <Row className="mt-7">
          <Col xs={12} className="mx-auto">
            <ul className="pagination pagination-primary-soft d-flex justify-content-center mb-0">
              <li>
                <ul className="list-unstyled">
                  <li className="page-item disabled">
                    <Link className="page-link" href="" tabIndex={-1} aria-disabled="true">
                      Prev
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" href="">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="">
                      ..
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="">
                      22
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="">
                      Next
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blogs
