(function() {var type_impls = {
"std":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#905\">source</a></span><a href=\"#impl-Clone-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/clone/trait.Clone.html\" title=\"trait std::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/convert/mod.rs.html#906\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"std/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"std/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","std::string::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.8.0\">1.8.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#926\">source</a></span><a href=\"#impl-Error-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.description\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/convert/mod.rs.html#927\">source</a><a href=\"#method.description\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/error/trait.Error.html#method.description\" class=\"fn\">description</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"primitive.str.html\">str</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.42.0: use the Display impl or to_string()</span></div></span><div class='docblock'> <a href=\"std/error/trait.Error.html#method.description\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.source\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.30.0\">1.30.0</span> · <a class=\"src\" href=\"src/core/error.rs.html#84\">source</a></span><a href=\"#method.source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/error/trait.Error.html#method.source\" class=\"fn\">source</a>(&amp;self) -&gt; <a class=\"enum\" href=\"std/option/enum.Option.html\" title=\"enum std::option::Option\">Option</a>&lt;&amp;(dyn <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static)&gt;</h4></section></summary><div class='docblock'>The lower-level source of this error, if any. <a href=\"std/error/trait.Error.html#method.source\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cause\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"src/core/error.rs.html#120\">source</a></span><a href=\"#method.cause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/error/trait.Error.html#method.cause\" class=\"fn\">cause</a>(&amp;self) -&gt; <a class=\"enum\" href=\"std/option/enum.Option.html\" title=\"enum std::option::Option\">Option</a>&lt;&amp;dyn <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.33.0: replaced by Error::source, which can support downcasting</span></div></span></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.provide\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/error.rs.html#184\">source</a><a href=\"#method.provide\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/error/trait.Error.html#method.provide\" class=\"fn\">provide</a>&lt;'a&gt;(&amp;'a self, request: &amp;mut <a class=\"struct\" href=\"std/error/struct.Request.html\" title=\"struct std::error::Request\">Request</a>&lt;'a&gt;)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>error_generic_member_access</code>&nbsp;<a href=\"https://github.com/rust-lang/rust/issues/99301\">#99301</a>)</span></div></span><div class='docblock'>Provides type based access to context intended for error reports. <a href=\"std/error/trait.Error.html#method.provide\">Read more</a></div></details></div></details>","Error","std::string::ParseError"],["<section id=\"impl-Eq-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#940\">source</a></span><a href=\"#impl-Eq-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/cmp/trait.Eq.html\" title=\"trait std::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section>","Eq","std::string::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#950\">source</a></span><a href=\"#impl-Ord-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/cmp/trait.Ord.html\" title=\"trait std::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/convert/mod.rs.html#951\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, _other: &amp;<a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a>) -&gt; <a class=\"enum\" href=\"std/cmp/enum.Ordering.html\" title=\"enum std::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"std/cmp/enum.Ordering.html\" title=\"enum std::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"std/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"src/core/cmp.rs.html#829-831\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"std/marker/trait.Sized.html\" title=\"trait std::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"std/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"src/core/cmp.rs.html#849-851\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"std/marker/trait.Sized.html\" title=\"trait std::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"std/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"src/core/cmp.rs.html#874-877\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"std/marker/trait.Sized.html\" title=\"trait std::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"std/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","std::string::ParseError"],["<section id=\"impl-Copy-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#901\">source</a></span><a href=\"#impl-Copy-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/marker/trait.Copy.html\" title=\"trait std::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section>","Copy","std::string::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#933\">source</a></span><a href=\"#impl-PartialEq-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/cmp/trait.PartialEq.html\" title=\"trait std::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/convert/mod.rs.html#934\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, _: &amp;<a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a>) -&gt; <a class=\"primitive\" href=\"primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","std::string::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.44.0\">1.44.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#965\">source</a></span><a href=\"#impl-Hash-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/hash/trait.Hash.html\" title=\"trait std::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/convert/mod.rs.html#966\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H&gt;(&amp;self, _: <a class=\"primitive\" href=\"primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"std/hash/trait.Hasher.html\" title=\"trait std::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"std/hash/trait.Hasher.html\" title=\"trait std::hash::Hasher\"><code>Hasher</code></a>. <a href=\"std/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"std/hash/trait.Hasher.html\" title=\"trait std::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"std/marker/trait.Sized.html\" title=\"trait std::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"std/hash/trait.Hasher.html\" title=\"trait std::hash::Hasher\"><code>Hasher</code></a>. <a href=\"std/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","std::string::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#919\">source</a></span><a href=\"#impl-Display-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/fmt/trait.Display.html\" title=\"trait std::fmt::Display\">Display</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/convert/mod.rs.html#920\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, _: &amp;mut <a class=\"struct\" href=\"std/fmt/struct.Formatter.html\" title=\"struct std::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"std/result/enum.Result.html\" title=\"enum std::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"primitive.unit.html\">()</a>, <a class=\"struct\" href=\"std/fmt/struct.Error.html\" title=\"struct std::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"std/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","std::string::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C!%3E-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#957\">source</a></span><a href=\"#impl-From%3C!%3E-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/convert/trait.From.html\" title=\"trait std::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"primitive.never.html\">!</a>&gt; for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/convert/mod.rs.html#959\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(x: <a class=\"primitive\" href=\"primitive.never.html\">!</a>) -&gt; <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<!>","std::string::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#912\">source</a></span><a href=\"#impl-Debug-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/fmt/trait.Debug.html\" title=\"trait std::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/convert/mod.rs.html#913\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, _: &amp;mut <a class=\"struct\" href=\"std/fmt/struct.Formatter.html\" title=\"struct std::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"std/result/enum.Result.html\" title=\"enum std::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"primitive.unit.html\">()</a>, <a class=\"struct\" href=\"std/fmt/struct.Error.html\" title=\"struct std::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"std/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","std::string::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"src/core/convert/mod.rs.html#943\">source</a></span><a href=\"#impl-PartialOrd-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/core/convert/mod.rs.html#944\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, _other: &amp;<a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a>) -&gt; <a class=\"enum\" href=\"std/option/enum.Option.html\" title=\"enum std::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"std/cmp/enum.Ordering.html\" title=\"enum std::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"std/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"src/core/cmp.rs.html#1125\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"std/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"src/core/cmp.rs.html#1142\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"std/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"src/core/cmp.rs.html#1158\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"std/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"src/core/cmp.rs.html#1175\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"std/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","std::string::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Termination-for-Infallible\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.61.0\">1.61.0</span> · <a class=\"src\" href=\"src/std/process.rs.html#2344-2348\">source</a></span><a href=\"#impl-Termination-for-Infallible\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"std/process/trait.Termination.html\" title=\"trait std::process::Termination\">Termination</a> for <a class=\"enum\" href=\"std/convert/enum.Infallible.html\" title=\"enum std::convert::Infallible\">Infallible</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.report\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/std/process.rs.html#2345-2347\">source</a><a href=\"#method.report\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"std/process/trait.Termination.html#tymethod.report\" class=\"fn\">report</a>(self) -&gt; <a class=\"struct\" href=\"std/process/struct.ExitCode.html\" title=\"struct std::process::ExitCode\">ExitCode</a></h4></section></summary><div class='docblock'>Is called to get the representation of the value as status code.\nThis status code is returned to the operating system.</div></details></div></details>","Termination","std::string::ParseError"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()