@extends('layouts.admin_header')

@section('content')
<div class="row">
    <div class="row frmtitle"><h1>DANH SÁCH BÌNH LUẬN</h1></div>
    <div class="row frmcontent">
        <div class="row mb10 frmdsloai">
            <table>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Nội dung</th>
                    <th>Iduser</th>
                    <th>Idpro</th>
                    <th>Ngày bình luận</th>
                    <th></th>
                </tr>
                @foreach ($listbinhluan as $binhluan)
                    <tr>
                        <td><input type="checkbox" name="" /></td>
                        <td>{{ $binhluan->id }}</td>
                        <td>{{ $binhluan->noidung }}</td>
                        <td>{{ $binhluan->iduser }}</td>
                        <td>{{ $binhluan->idpro }}</td>
                        <td>{{ $binhluan->ngaybinhluan }}</td>
                        <td>
                            <a href="{{ route('admin.binhluan.destroy', $binhluan->id) }}">
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
            {{-- <a href="{{ route('admin.binhluan.create') }}"><input type="button" value="Nhập thêm" /></a> --}}
        </div>
    </div>
</div>
@endsection
