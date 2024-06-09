@extends('layouts.admin_header')

@section('content')
<div class="row">
    <div class="row frmtitle"><h1>DANH SÁCH TÀI KHOẢN</h1></div>
    <div class="row frmcontent">
        <div class="row mb10 frmdsloai">
            <table>
                <tr>
                    <th></th>
                    <th>MÃ</th>
                    <th>TÊNP</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                    <th></th>
                </tr>
                @foreach ($listtaikhoan as $taikhoan)
                    <tr>
                        <td><input type="checkbox" name="" /></td>
                        <td>{{ $taikhoan->id }}</td>
                        <td>{{ $taikhoan->name }}</td>
                        <td>{{ $taikhoan->email }}</td>
                        <td>{{ $taikhoan->role }}</td>
                        <td>
                            <a href="{{ route('admin.taikhoan.edit', $taikhoan->id) }}">
                                <input type="button" value="Sửa" />
                            </a>
                            <a href="{{ route('admin.taikhoan.destroy', $taikhoan->id) }}">
                                <input type="button" value="Xóa" />
                            </a>
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
        <div class="row mb10">
            <input type="button" value="Chọn tất cả" />
            <input type="button" value="Bỏ chọn tất cả" />
            <input type="button" value="Xóa các mục đã chọn" />
            {{-- <a href="{{ route('admin.taikhoan.create') }}"><input type="button" value="Nhập thêm" /></a> --}}
        </div>
    </div>
</div>
@endsection
