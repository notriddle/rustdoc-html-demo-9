(function() {var implementors = {
"alloc":[["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/ffi/struct.CString.html\" title=\"struct alloc::ffi::CString\">CString</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/rc/struct.UniqueRc.html\" title=\"struct alloc::rc::UniqueRc\">UniqueRc</a>&lt;T&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/boxed/struct.ThinBox.html\" title=\"struct alloc::boxed::ThinBox\">ThinBox</a>&lt;T&gt;"],["impl&lt;B: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, B&gt;<div class=\"where\">where\n    B::<a class=\"associatedtype\" href=\"alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;B&gt;,</div>"],["impl&lt;T: <a class=\"trait\" href=\"core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/collections/binary_heap/struct.PeekMut.html\" title=\"struct alloc::collections::binary_heap::PeekMut\">PeekMut</a>&lt;'_, T, A&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T, A&gt;"],["impl&lt;T, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;"],["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T, A&gt;"]],
"core":[],
"std":[["impl <a class=\"trait\" href=\"std/ops/trait.Deref.html\" title=\"trait std::ops::Deref\">Deref</a> for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl&lt;T: ?<a class=\"trait\" href=\"std/marker/trait.Sized.html\" title=\"trait std::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"std/ops/trait.Deref.html\" title=\"trait std::ops::Deref\">Deref</a> for <a class=\"struct\" href=\"std/sync/struct.MutexGuard.html\" title=\"struct std::sync::MutexGuard\">MutexGuard</a>&lt;'_, T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/ops/trait.Deref.html\" title=\"trait std::ops::Deref\">Deref</a> for <a class=\"struct\" href=\"std/io/struct.IoSliceMut.html\" title=\"struct std::io::IoSliceMut\">IoSliceMut</a>&lt;'a&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"std/marker/trait.Sized.html\" title=\"trait std::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"std/ops/trait.Deref.html\" title=\"trait std::ops::Deref\">Deref</a> for <a class=\"struct\" href=\"std/sync/struct.RwLockWriteGuard.html\" title=\"struct std::sync::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, T&gt;"],["impl <a class=\"trait\" href=\"std/ops/trait.Deref.html\" title=\"trait std::ops::Deref\">Deref</a> for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;T: ?<a class=\"trait\" href=\"std/marker/trait.Sized.html\" title=\"trait std::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"std/ops/trait.Deref.html\" title=\"trait std::ops::Deref\">Deref</a> for <a class=\"struct\" href=\"std/sync/struct.RwLockReadGuard.html\" title=\"struct std::sync::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, T&gt;"],["impl&lt;T, F: <a class=\"trait\" href=\"std/ops/trait.FnOnce.html\" title=\"trait std::ops::FnOnce\">FnOnce</a>() -&gt; T&gt; <a class=\"trait\" href=\"std/ops/trait.Deref.html\" title=\"trait std::ops::Deref\">Deref</a> for <a class=\"struct\" href=\"std/sync/struct.LazyLock.html\" title=\"struct std::sync::LazyLock\">LazyLock</a>&lt;T, F&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/ops/trait.Deref.html\" title=\"trait std::ops::Deref\">Deref</a> for <a class=\"struct\" href=\"std/io/struct.IoSlice.html\" title=\"struct std::io::IoSlice\">IoSlice</a>&lt;'a&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()