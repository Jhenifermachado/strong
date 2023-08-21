<template>
  <nav class="navbar navbar-expand-lg navbar-light cor1">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Strong Nutrition</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >PÁGINA PRINCIPAL</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PRODUTOS</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              OPÇÕES
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#filmes">PRODUTOS</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">PLANOS</a>
          </li>
        </ul>
        <form class="d-flex">
          <span> <img src="https://www.gsuplementos.com.br/tema/growth/img/svgs/cart-ab.svg" alt=""> </span>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Pesquisar
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
