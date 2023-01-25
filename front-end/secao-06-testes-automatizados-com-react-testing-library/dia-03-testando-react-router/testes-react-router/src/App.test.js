import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App, { About } from "./App";
import renderWithRouter from "./helpers/renderWithRouter";

describe("Testando toda a aplicação", () => {
  it("deve renderizar o componente App", () => {
    renderWithRouter(<App />);

    const titleHome = screen.getByRole("heading", {
      name: "Você está na página Início",
    });

    expect(titleHome).toBeInTheDocument();
  });

  it("deve renderizar o componente sobre", () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole("link", {
      name: "Sobre",
    });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe("/about");

    const titleAbout = screen.getByRole("heading", {
      name: "Você está na página Sobre",
    });
    expect(titleAbout).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do NotFound', () => {
    const { history } = renderWithRouter(<App />);

    act(() => { 
      history.push('/pagina/que-nao-existe/')
    });

    const titleNotFound = screen.getByRole('heading', {
      name: 'Página não encontrada',
    });
    expect(titleNotFound).toBeInTheDocument();
  })
 
  it('deve renderizar o component About(apenas ele)', () => {
    renderWithRouter(<About />);
    const titleAbout = screen.getByRole("heading", {
      name: "Você está na página Sobre",
    });
    expect(titleAbout).toBeInTheDocument();
  }) 
});
