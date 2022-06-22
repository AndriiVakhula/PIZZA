<template>
    <aside class="sidebar">
        <ul class="nav-list">
            <li class="nav-item">
                <router-link :to="{name: 'AdminDasboard'}">
                    <ion-icon name="grid-outline"></ion-icon>
                    Dasboard
                </router-link>
            </li>
             <li class="nav-item">
                <router-link :to="{name: 'AdminCategory'}">
                    <ion-icon name="copy-outline"></ion-icon>
                    Category
                </router-link>
            </li>
        </ul>
    </aside>

</template>

<script>
export default {

}
</script>

<style lang="scss">
    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: #FFFFFF;
        width: 250px;
        height: 100vh;
        border-right: 1px solid #E5E7EB;
        padding-top: 100px;
        box-shadow: 0px 10px 30px rgba(17, 38, 146, 0.05);

        .nav-list {
            display: flex;
            flex-direction: column;
            padding: 0 12px;
        }

        .nav-item a {
            display: block;
            width: 100%;
            padding: 4px 15px 4px 60px;
            font-weight: 500;
            color: #8A92A6;
            position: relative;

            ion-icon {
                position: absolute;
                left: 24px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }


</style>
