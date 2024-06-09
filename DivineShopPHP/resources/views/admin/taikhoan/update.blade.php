@extends('layouts.admin_header')

@section('content')
<div class="row">
    <div class="row frmtitle"><h1>CẬP NHẬT TÀI KHOẢN</h1></div>
    <div class="row frmcontent">
        <form action="{{ url('/admin/taikhoan/update', ['id' => $dm->id]) }}" method="post">
            @csrf
            @method('PUT')
            <div class="row mb10">
                Tên tài khoản <br />
                <input type="text" name="name" value="{{ $dm->name }}" />
            </div>
            <div class="row mb10">
                Email <br />
                <input type="text" name="email" value="{{ $dm->email }}" />
            </div>
            <div class="row mb10">
                Role <br />
                <input type="text" name="role" value="{{ $dm->role }}" />
            </div>
            <div class="row mb10">
                <input type="submit" name="capnhatdanhmuc" value="Cập nhật" />
                <input type="reset" value="Nhập lại" />
                <a href="{{ url('/admin/taikhoan') }}"><input type="button" value="DANH SÁCH" /></a>
            </div>
            @if(isset($thongbao) && ($thongbao != ""))
                <div>{{ $thongbao }}</div>
            @endif
        </form>
    </div>
</div>
@endsection
