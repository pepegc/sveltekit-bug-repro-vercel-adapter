<script lang="ts">
	//import type { PageData } from "./$types";
    //export let data: PageData;
</script>


<h1>Navigate to /[a]/[b]/[...c]</h1> 


<div>
    TEST 1
    <a data-sveltekit-reload href='/foo/bar/foobar'>/foo/bar/foobar</a>
</div>

<div>
    TEST 2
    <a data-sveltekit-reload href='/foo/bar/foobar/foo'>/foo/bar/foobar/foo</a>
</div>

<div>
    TEST 3
    <a data-sveltekit-reload href='/foo/index/bar'>/foo/index/bar</a>
</div>

<div>
    TEST 4
    <a data-sveltekit-reload href='/foo/bar/index'>/foo/bar/index</a>
</div>

<div>
    TEST 5
    <a data-sveltekit-reload href='/foo/bar/foobar/index'>/foo/bar/foobar/index</a>
</div>

<div>
    TEST 6
    <a data-sveltekit-reload href='/foo/bar/foobar/index/foo'>/foo/bar/foobar/index/foo</a>
</div>
