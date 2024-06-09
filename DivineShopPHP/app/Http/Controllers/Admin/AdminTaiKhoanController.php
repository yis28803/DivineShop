<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Taikhoan;

class AdminTaiKhoanController extends Controller
{
    public function index()
    {
        $listtaikhoan = Taikhoan::orderBy('id', 'desc')->get();
        return view('admin.taikhoan.list', compact('listtaikhoan'));
        
    }

    public function create()
    {
        return view('admin.taikhoan.add');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'role' => 'required',
        ]);

        Taikhoan::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'role' => $request->input('role'),
        ]);

        return redirect()->route('admin.taikhoan.index')->with('success', 'Danh mục đã được thêm thành công.');
    }

    public function edit($id)
    {
        $dm = Taikhoan::find($id);
        return view('admin.taikhoan.update', compact('dm'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'role' => 'required',
        ]);

        $dm = Taikhoan::find($id);
        $dm->name = $request->input('name');
        $dm->email = $request->input('email');
        $dm->role = $request->input('role');

        $dm->save();

        return redirect()->route('admin.taikhoan.index')->with('success', 'Danh mục đã được cập nhật thành công.');
    }

    public function destroy($id)
    {
        $dm = Taikhoan::find($id);
        $dm->delete();

        return redirect()->route('admin.taikhoan.index')->with('success', 'Danh mục đã được xóa thành công.');
    }
}
