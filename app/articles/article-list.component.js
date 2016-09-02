angular.module('articleList').
    component('articleList', {
    templateUrl: 'articles/article-list.template.html',
    controller: function ArticleListCtrl(){
        this.articles = [
            {
                id: 1,
                header: 'Blog of blogopost about blogoflowers',
                snipet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: 'E. Hyperraccoon',
                tagArray: ["cat", "developer", "cat", "cat", "raccoon", "dog"],
                createTime: 1471845016546,
                link: 'src/img/pic1.png'
            }, {
                id: 2,
                header: 'Blogotitle about colorfull',
                snipet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: 'E. Hyperraccoon',
                tagArray: ["coon", "raccoon", "cat"],
                createTime: 1472065634240,
                link: 'src/img/pic2.png'
            }, {
                id: 3,
                header: 'Blog of blogopost about blogoflowers',
                snipet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: 'E. Hyperraccoon',
                tagArray: ["coon", "cat"],
                createTime: 1472261313396,
                link: 'src/img/pic1.png'
            }, {
                id: 4,
                header: 'Blogotitle about colorfull',
                snipet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: 'E. Hyperraccoon',
                tagArray: ["cat", "cat", "raccoon"],
                createTime: 1472388234039,
                link: 'src/img/pic2.png'
            }, {
                id: 5,
                header: 'Blog of blogopost about blogoflowers',
                snipet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: 'E. Hyperraccoon',
                tagArray: ["coon", "coon", "cat", "cat"],
                createTime: 1472556947114,
                link: 'src/img/pic1.png'
            }, {
                id: 6,
                header: 'Blogotitle about colorfull',
                snipet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: 'E. Hyperraccoon',
                tagArray: ["dog", "coon", "cat", "cat"],
                createTime: 1472590898445,
                link: 'src/img/pic2.png'
            }
        ];
        this.placeholder = '...';
        this.limit = function () {
            return 100;
        }
    }
});