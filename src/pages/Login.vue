<template>
    <div class="d-flex align-items-center" style="height: calc(100% - 56px)">
        <div class="card flex-fill">
            <div class="card-body">
                <h3 class="card-title text-center">Login</h3>
                <form action="">
                    <div class="form-group">
                        <label for="email">Usuário</label>
                        <input type="text" name="email" id="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Senha</label>
                        <input type="password" name="password" id="password" class="form-control">
                    </div>
                    <div class="form-group">
                        <router-link to="/home" class="btn btn-primary">Entrar</router-link>
                        <button class="btn btn-link">Esqueci minha senha</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login'
}
</script>
