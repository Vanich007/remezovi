import {Container, Content, PageContainer} from "@/app/components/DashboardLayout/styles";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <Container>
            <Header />
            <Content>
                <Sidebar />
                <PageContainer>{children}</PageContainer>
            </Content>
            <Footer />
        </Container>
    );
}