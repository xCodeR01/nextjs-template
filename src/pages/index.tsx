import Image from "next/image";
import ThemeToggle from "@/components/examples/theme-toggle";
import ReactQueryExample from "@/components/examples/react-query";
import { Text } from "@/components/elements";
import { Container, Box, Row, Col } from "@/components/layout";
// import { IntlExample } from "@/components/examples/intl";
import { styled } from "@/theme/stitches.config";
import Counter from "@/components/examples/redux";

export default function Home() {
  return (
    <Container
      size="lg"
      css={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Text
        as="h1"
        css={{
          margin: "$lg auto",
          textGradient: "to right, $blue11, $purple11",
          fontSize: 60,
          fontWeight: "$bold",
          paddingBottom: 10,
        }}
      >
        Nextjs Template
      </Text>

      <ThemeToggle />

      <ReactQueryExample />
      <Counter />
      {/* <IntlExample /> */}

      <Heading>Included components example</Heading>
      <Row gap={2} className="asd">
        <Col xs={3} md={4}>
          <Item>xs=3, md=4</Item>
        </Col>
        <Col xs={6} md={4}>
          <Item>xs=6, md=4</Item>
        </Col>
        <Col xs={3} md={4}>
          <Item>xs=3, md=4</Item>
        </Col>
        <Col xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Col>
        <Col xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Col>
      </Row>

      {/* exmaple of linking something from public */}
      <Box
        css={{
          mt: "100px",
          mb: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src="/icons/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        />
      </Box>
    </Container>
  );
}

const Heading = styled("h2", {
  bgColor: "$primaryBg",
  p: "$md",
  mb: "$5",
  borderRadius: "$sm",
});

const Item = styled("div", {
  width: "100%",
  p: "$4",
  bgColor: "$primary",
  textAlign: "center",
  borderRadius: "$md",
});
