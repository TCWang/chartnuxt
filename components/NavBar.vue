<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-2">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">社區網站-數位轉型</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                選舉分析
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/election/president"
                    >總統選舉</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/election/legislator"
                    >立委選舉</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/election/population"
                    >人口趨勢</a
                  >
                </li>
              </ul>
            </li>
          </ul>

          <a class="m-auto" aria-current="page" href="#">登入</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped></style>
